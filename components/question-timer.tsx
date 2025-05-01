import { useEffect, useState } from "react";

interface QuestionProps {
  timer: number;
  timeoutCallback: () => void;
}

const QuestionTimer = ({ timer = 0, timeoutCallback }: QuestionProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(timer);
  console.log("Question Timer*************", timer);
  useEffect(() => {
    console.log("setting TIMEOUT*****");
    setTimeout(timeoutCallback, timer);
  }, []);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const timeIntervalRef = setInterval(() => {
      setRemainingTime((prevState: number) => prevState - 100);
    }, 100);
    return () => {
      //   clearInterval(timeIntervalRef);
    };
  }, []);
  return (
    <div>
      <progress id="question-time" max={timer} value={remainingTime} />
    </div>
  );
};
export default QuestionTimer;
