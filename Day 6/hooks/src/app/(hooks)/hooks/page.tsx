/** @format */

import React from "react";
import Contoh from "../components/contoh.components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "ini contoh hooks",
};

export default function page({}: Props) {
  return (
    <div>
      <Contoh />
    </div>
  );
}
