/** @format */
"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/../public/kfc-logo.svg";
import Link from "next/link";
import "./navbar.css";
import { Menu } from "lucide-react";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { actionLogout } from "@/action/auth.action";

type Props = {};
export default function NavbarDesktop({}: Props) {
  // const session = await auth();
  const { data: session } = useSession();
  const router = useRouter();

  const logout = async () => {
    await actionLogout();
    toast("Logout Success");
    router.push("/login");
  };

  return (
    <div className="w-full shadow sticky top-0 bg-white z-50">
      <div className="  max-w-[1220px]  2xl:max-w-[1440px] m-auto w-full p-3 px-[15px] flex justify-between">
        <div className="flex">
          <Image
            src={Logo}
            alt=""
            width={150}
            height={78}
            className="w-[150px] h-[78px]"
          />
          <Link
            href="/"
            className="flex items-center w-[85px] text-lg  justify-end font-bold"
          >
            MENU
          </Link>
          <Link
            href="/"
            className="flex items-center ml-5 text-nowrap w-[85px] text-lg  justify-end font-bold"
          >
            {session?.user.full_name}
          </Link>
        </div>
        <div className="content-center ">
          <Link className="  text-lg  font-bold" href="/products">
            Products
          </Link>
        </div>

        <div className="flex max-w-[465px] w-full text-[15px] items-center justify-end">
          <Link href={"#"} className="text-[#e4002b] font-bold mr-[6px]">
            Kode Promosi
          </Link>
          <Link href={"#"} className="font-bold">
            English
          </Link>

          <div className="flex items-center">
            <div className="avatar"></div>
            <div className="cart">1</div>
          </div>

          <button className="ml-[14px]" onClick={logout}>
            <Menu width={25} height={33} />
          </button>
        </div>
      </div>
    </div>
  );
}
