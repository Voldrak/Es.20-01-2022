import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./layout.module.scss";

export default function LayoutDefault({ children }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li className={`${router.pathname === "/" && styles.activeBtn}`}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${router.pathname === "/gallery" && styles.activeBtn}`}
          >
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === "/esperimenti" && styles.activeBtn
            }`}
          >
            <Link href="/esperimenti">
              <a>Esperimenti</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.children}>{children}</div>

      <div className={styles.footer}>
        <Link href="/">
          <a>Vai alla Home</a>
        </Link>
      </div>
    </>
  );
}