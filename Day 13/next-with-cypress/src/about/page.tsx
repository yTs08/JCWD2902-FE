import React from "react";
import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
  return (
    <nav>
      <h1>About Page</h1>
      <Link href={"/"}>Home</Link>
    </nav>
  );
}
