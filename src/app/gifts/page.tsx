import { NextPage } from "next";
import Card from "./card";

const GiftPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full w-full bg-[#f7f7f7] font-mont pb-20">
      <h1 className="mt-36 mb-14 text-black text-2xl">Lista de Casamento</h1>
      <span className="text-lg text-gray-700 max-w-md">
        Se você deseja nos presentear no nosso casamento, você pode comprar uma
        cesta basica, que será doada para uma instituição de caridade.
      </span>
      <Card />
    </div>
  );
};

export default GiftPage;
