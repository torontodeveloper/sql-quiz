import Header from "@/components/header";
import Quiz from "@/components/quiz";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Quiz />
    </div>
  );
}
