import { useEffect, useState } from "react";

interface QuestionProps {
  timer: number;
  timeoutCallback: () => void;
}

const QuestionTimer = ({ timer = 0, timeoutCallback }: QuestionProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(timer);

  useEffect(() => {
    console.log("setting TIMEOUT*****");
    setTimeout(timeoutCallback, timer);
  }, [timeoutCallback, timer]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    setInterval(() => {
      setRemainingTime((prevState: number) => prevState - 100);
    }, 100);
  }, []);
  return (
    <div>
      <progress id="question-time" max={timer} value={remainingTime} />
    </div>
  );
};
export default QuestionTimer;
