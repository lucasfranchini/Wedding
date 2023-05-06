"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./style.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around items-center w-full p-5 fixed top-0 left-0 bg-gray-900 bg-opacity-5 text-xl">
      <Image src="/FMClear.png" alt="F&M" width={100} height={40} />
      <div
        className={`flex items-center gap-5 ${pathname === "/" && "Container"}`}
      >
        <Link href="/">Inicio</Link>
        <Link href="/gifts">Presentes</Link>
        <Link href="/confirm">Confirmar Presença</Link>
      </div>
    </div>
  );
};

export default Header;
