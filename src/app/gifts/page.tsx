import { NextPage } from "next";
import "./style.css";

const GiftPage: NextPage = () => {
  const giftMessage =
    "Olá, gostaria de comprar um cesta basica para o casal Fabio e Martha como presente de casamento.";
  return (
    <div className="Page flex flex-col items-center h-screen w-full text-lg text-gray-700">
      <h1 className="mt-36 mb-14 text-black text-2xl">Lista de Casamento</h1>
      Como Presente gostariamos de receber cestas basicas para doação.
      <a
        href={`https://wa.me/553232738144?text=${giftMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        Presentear
      </a>
    </div>
  );
};

export default GiftPage;
