import Image from "next/image";

const Card: React.FC = () => {
  const giftMessage =
    "Olá, gostaria de comprar um cesta basica para o casal Fabio e Martha como presente de casamento.";
  return (
    <div className="flex flex-col justify-between items-center bg-white w-64 min-h-[400px] rounded-md pt-10 pb-20 mt-28">
      <div className="border border-black shadow-sm">
        <Image
          src="/cesta-alimento.jpg"
          alt="cesta basica"
          width={200}
          height={200}
        />
      </div>
      <a
        href={`https://wa.me/553232738144?text=${giftMessage}`}
        target="_blank"
        rel="noreferrer"
        className=" w-1/2 p-4 text-white bg-[#c58d69] text-center rounded"
      >
        Presentear
      </a>
    </div>
  );
};

export default Card;
