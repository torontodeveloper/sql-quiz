import Image from "next/image";
import logo from "../public/sql-logo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        src={logo}
        alt="quiz logo"
        width={300}
        height={300}
        priority={true}
      />
      <h1>SQL Quiz</h1>
    </header>
  );
};
export default Header;
