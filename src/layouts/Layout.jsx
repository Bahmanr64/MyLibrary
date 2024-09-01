import { FaHeart } from "react-icons/fa6";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book Store</h1>
        <p>
          <a href="www.google.com">Bahman&Eli</a> | React Book Store
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by Bahman <FaHeart color="red" />
          Eli
        </p>
      </footer>
    </>
  );
}

export default Layout;
