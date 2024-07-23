/** @format */

import Navbar from "@/components/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function template({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// <mainlayout>
//   <maintemplate>
//     <template>
//       <page></page>
//     </template>
//   </maintemplate>
// </mainlayout>;
