import Image from "next/image";
import Countdown from "./countdown";

export default function Home() {
  const style = {
    backgroundImage: "url(/fabioEMartha.jpeg)",
  };
  return (
    <main className="pb-10 bg-[#f7f7f7]">
      <div
        className="flex justify-end items-center h-96 sm:h-screen bg-cover bg-opacity-60 bg-no-repeat "
        style={style}
      >
        <div className="hidden xl:block xl:mr-10">
          <Image src="/FMComplete.png" alt="F&M" width={500} height={40} />
        </div>
      </div>
      <div className="flex justify-center xl:hidden ">
        <Image src="/FMComplete.png" alt="F&M" width={500} height={40} />
      </div>
      <span className="flex justify-center mt-20">
        CONTAGEM REGRESSIVA PARA O GRANDE DIA
      </span>
      <Countdown targetDate="2023-07-14T19:00:00-03:00" />
    </main>
  );
}
