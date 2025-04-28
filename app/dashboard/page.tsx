"use client";
import { useState } from "react";
import Link from "next/link";
const Dashboard = () => {
  const [email, setEmail] = useState<string>("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  //   function handleSubmitEmail(event: React.ChangeEvent<HTMLInputElement>) {
  //     console.log("email", event.target.value);
  //     setEmail(event.target.value);
  //   }
  return (
    <div>
      <>
        <label htmlFor="email">Plz enter ur email to send ur score</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <Link href="/finalpage">Click Me!!!</Link>
      </>
    </div>
  );
};
export default Dashboard;
