"use client";

import { useState } from "react";
import questionsList from "../app/questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const activeQuestionIndex = userAnswers.length;
  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
  }
  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setUserAnswers((prevState) => [...prevState, event?.target?.value]);
    console.log("event", event.target.value);
  }
  return (
    <div id="question">
      <form onSubmit={handleSubmit}>
        <h2>{questionsList[activeQuestionIndex].text}</h2>
        <ul>
          {questionsList[activeQuestionIndex].answers.map((answer, index) => (
            <label key={index}>
              <div id="answers">
                <input
                  type="radio"
                  value={answer}
                  name={index.toString()}
                  onChange={handleRadio}
                />
                {answer}
              </div>
            </label>
          ))}
        </ul>
        <button type="submit">Click Me!!</button>
      </form>
    </div>
  );
};
export default Quiz;
