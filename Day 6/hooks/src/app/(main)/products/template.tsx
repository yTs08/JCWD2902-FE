/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function temaplate({ children }: Props) {
  return <div className=" bg-green-400 min-h-screen w-full">{children}</div>;
}
