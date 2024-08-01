import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

export default function page({}: Props) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <div>
      <b className="text-[32px] mx-5 ">awaw</b>
    </div>
  );
}
