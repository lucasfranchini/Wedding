"use client";
import { NextPage } from "next";
import { useState } from "react";
import ConfirmAlert from "./confirmAlert";
import ConfirmForm from "./confirmForm";

const ConfirmPage: NextPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen overflow-y-scroll w-full bg-[#f7f7f7] font-mont pb-20">
      <h1 className="mt-36 mb-14 text-black text-2xl">Confirmar Presença</h1>
      <span className="text-lg text-gray-700">
        Confirme sua presença nessa data tão especial para nós.
      </span>
      {isConfirmed ? (
        <ConfirmAlert setConfirmed={setIsConfirmed} />
      ) : (
        <ConfirmForm setConfirmed={setIsConfirmed} />
      )}
    </div>
  );
};

export default ConfirmPage;
