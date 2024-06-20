"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <div>
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
