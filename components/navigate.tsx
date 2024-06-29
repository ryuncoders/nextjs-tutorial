"use client";
import styles from "../styles/navigate.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "✔️" : ""}
        </li>
        <li>
          <Link href="/about-us">about-us</Link>
          {path === "/about-us" ? "✔️" : ""}
        </li>
      </ul>
    </div>
  );
}
