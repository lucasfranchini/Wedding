"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around items-center w-full p-5 fixed top-0 left-0 bg-gray-900 bg-opacity-5 text-xl">
      <Image src="/FMClear.png" alt="F&M" width={100} height={40} />
      <div
        className={`flex items-center gap-5  ${
          pathname === "/" && "[text-shadow:_2px_2px_0_rgb(0_0_0_/_60%)]"
        }`}
      >
        <Link href="/">Inicio</Link>
        <Link href="/gifts">Presentes</Link>
        <Link href="/confirm">Confirmar Presença</Link>
      </div>
    </div>
  );
};

export default Header;
