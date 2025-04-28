import Image from "next/image";
import party from "../../public/party.jpg";
import styles from "./page.module.css";

const FinalPage = () => {
  return (
    <div className={styles.container}>
      <Image src={party} alt="party" width={400} height={400} priority={true} />
      <h2>Score is sent to Ur Email</h2>
    </div>
  );
};
export default FinalPage;
