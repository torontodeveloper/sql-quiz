"use client"

import questionsList from '../app/questions'

export function calculateScore(userAnswers:string[]){
    let score=0;
    for(const question of questionsList){
        for(const answer of userAnswers){
            if(question.answers[0]==answer){
                score+=1;
            }
        }
    }
    console.log('score is',score)
    return score
}
