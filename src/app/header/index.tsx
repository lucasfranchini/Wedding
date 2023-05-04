import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-around items-center w-full p-5 fixed top-0 left-0">
      <Image src="/FMClear.png" alt="F&M" width={100} height={40} />
      <div className="flex items-center gap-5 ">
        <Link href="/">Inicio</Link>
        <Link href="/gifts">Presentes</Link>
        <Link href="/confirm">Confirmar Presença</Link>
      </div>
    </div>
  );
};

export default Header;
