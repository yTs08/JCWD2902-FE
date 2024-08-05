import { client } from "@/lib/contentful";
import { Content } from "next/font/google";
import { title } from "process";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const blog = await client.getEntries({ content_type: "blog" });
  blog.items.map((_: any) => console.log(_.fields));

  return (
    <div className="max-w-screen-md m-auto mt-5">
      {blog.items.map((blog: any, key: number) => (
        <div
          key={key}
          className="max-w-screen-sm border p-4 px-8 rounded-[20px] shadow-md w-full"
        >
          <div className="text-2xl font-bold">{blog.fields.title}</div>
          <div className="text-xl font-bold">{blog.fields.contentData}</div>
          <div className="text-lg font-semibold">
            <span>longitude: {blog.fields.location.lon}</span>
            {""}
            <span>latitude:{blog.fields.location.lat}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
