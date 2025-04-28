"use client"

import questionsList from '../app/questions'

export function calculateScore(userAnswers:string[],totalQuestions:number){
    let score=0;
    let percentage =0
    for(const question of questionsList){
        for(const answer of userAnswers){
            if(question.answers[0]==answer){
                score+=1;
            }
        }
    }
    console.log('score is',score)
    percentage = (score/totalQuestions)*100
    return percentage+'%'
}
