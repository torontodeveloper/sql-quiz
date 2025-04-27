import Image from "next/image";
import logo from "../public/sql-logo.png";

const Header = () => {
  return (
    <header>
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
