"use client";

import { useEffect, useState } from "react";
import questionsList from "../app/questions";
import { calculateScore } from "@/shared/utils";
import quizDone from "../public/quiz-done.jpg";
import Image from "next/image";
import Dashboard from "@/app/dashboard/page";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [summary, setSummary] = useState<boolean>(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(
    userAnswers.length
  );
  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setUserAnswers((prevState) => [...prevState, event?.target?.value]);
    console.log("answer", event.target.value);
  }

  useEffect(() => {
    setActiveQuestionIndex(userAnswers.length);
    console.log("questoin index", userAnswers.length);
  }, [userAnswers.length]);
  useEffect(() => {
    if (activeQuestionIndex == questionsList.length) {
      setSummary(true);
    }
  }, [activeQuestionIndex]);

  return (
    <div id="quiz">
      <div id="question">
        <form>
          <h2>{questionsList[activeQuestionIndex]?.text}</h2>
          <ul>
            {questionsList[activeQuestionIndex]?.answers?.map(
              (answer, index) => (
                <label key={index} className="label">
                  <div id="answers">
                    <input
                      type="radio"
                      value={answer}
                      name={`question-${activeQuestionIndex}`}
                      onChange={handleRadio}
                    />
                    <span className="answer">{answer}</span>
                  </div>
                </label>
              )
            )}
          </ul>
        </form>
      </div>
      {summary && (
        <div id="summary">
          <Image
            src={quizDone}
            alt="done"
            width={300}
            height={300}
            priority={true}
          />
          <p>Your Final Score is</p>
          <h2>{calculateScore(userAnswers, questionsList.length)}</h2>
        </div>
      )}
      {summary && <Dashboard />}
    </div>
  );
};
export default Quiz;
