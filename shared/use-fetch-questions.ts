"use client"
import { useEffect, useState } from "react"
import axios from "axios"

interface QuestionListInterface {
    id:string,
    text:string,
    answer:string[]
}
const useFetchQuestion=()=>{
    const [questions,setQuestions] = useState<QuestionListInterface[]>([])
    async function fetchQuestions(){
       const resp =  await axios.get('../app/questions.js')
       const questions = resp
       return questions
    }
    useEffect(()=>{
        const resp = fetchQuestions()
        setQuestions([...questions,resp])
    })

    return {}
}
export default useFetchQuestion