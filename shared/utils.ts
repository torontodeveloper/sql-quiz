"use client"

import questionsList from '../app/questions'

export function calculateScore(userAnswers:string[],totalQuestions:number){
    let score=0;
    let percentage =0
    console.log('userAnswers',userAnswers)
    for(const question of questionsList){
        for(const answer of userAnswers){
            console.log('question',question.solution)
            console.log('answer is',answer)
            if(answer==question.solution){
                score+=1;
            }
        }
    }
    console.log('score is',score)
    percentage = (score/totalQuestions)*100
    return percentage+'%'
}
