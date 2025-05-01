"use client";

import { ChangeEvent, useEffect, useCallback, useState } from "react";
import questionsList from "../app/questions";
import { calculateScore } from "@/shared/utils";
import quizDone from "../public/quiz-done.jpg";
import Image from "next/image";
import Dashboard from "@/app/dashboard/page";
import { Button } from "@/stories/Button";
import { Checkbox } from "@/stories/Checkbox";
import QuestionTimer from "./question-timer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [summary, setSummary] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(
    userAnswers.length
  );
  const shuffledAnswers = [...questionsList];
  useEffect(() => {
    shuffledAnswers.sort(() => Math.random() - 0.5);
  }, []);

  function handleRadio(
    event: React.ChangeEvent<HTMLInputElement>,
    index: string,
    answer: string
  ) {
    console.log("event", event.target.value, index);
    setUserAnswers((prevState) => [...prevState, answer]);
    setChecked(!checked);
  }

  useEffect(() => {
    setActiveQuestionIndex(userAnswers.length);
  }, [userAnswers.length]);
  useEffect(() => {
    if (activeQuestionIndex == questionsList.length) {
      setSummary(true);
    }
  }, [activeQuestionIndex]);
  const handleSkipAnswer = useCallback(handleRadio, []);

  return (
    <div id="quiz" data-testid="quiz">
      <h1>Quiz</h1>
      <div id="question">
        <QuestionTimer timer={10000} timeoutCallback={handleSkipAnswer} />
        <form>
          <h2>{questionsList[activeQuestionIndex]?.text}</h2>
          <ul>
            {shuffledAnswers[activeQuestionIndex]?.answers?.map(
              (answer, index) => (
                <label key={index} className="label">
                  <div id="answers">
                    <Checkbox
                      label={answer}
                      primary
                      checked={checked}
                      onChange={(
                        event: ChangeEvent<HTMLInputElement>,
                        index: string
                      ) => handleRadio(event, index, answer)}
                    />
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
      <Button label="Click Mee" primary={true} size="large" />
      <Button label="Reset" primary={false} size="small" />
    </div>
  );
};
export default Quiz;
