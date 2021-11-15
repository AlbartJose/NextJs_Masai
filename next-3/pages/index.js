import styles from "./home.module.css";
import Image from "next/image";
const HomePage = () => (
  <>
    <div className={styles.head}>Home Page</div>
    <div className={styles.welcome}>
      <Image src="/welcome-my-page.jpg" width={800} height={500} />
    </div>
  </>
);
export default HomePage;
