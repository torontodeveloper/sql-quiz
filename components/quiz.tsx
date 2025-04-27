"use client";

import { useState } from "react";
import questionsList from "../app/questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const activeQuestionIndex = userAnswers.length;
  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setUserAnswers((prevState) => [...prevState, event?.target?.value]);
    console.log("event", event.target.value);
  }
  console.log("questin index*********", activeQuestionIndex);
  return (
    <div id="quiz">
      <div id="question">
        <form>
          <h2>{questionsList[activeQuestionIndex].text}</h2>
          <ul>
            {questionsList[activeQuestionIndex].answers.map((answer, index) => (
              <label key={index} className="label">
                <div id="answers">
                  <input
                    type="radio"
                    value={answer}
                    name={index.toString()}
                    onChange={handleRadio}
                  />
                  <span className="answer">{answer}</span>
                </div>
              </label>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};
export default Quiz;
