import Image from "next/image";

export default function Home() {
  const style = {
    backgroundImage: "url(/fabioEMartha.jpeg)",
  };
  return (
    <main>
      <div
        className="flex justify-end items-center h-96 sm:h-screen bg-cover bg-opacity-60 bg-no-repeat"
        style={style}
      >
        <div className="hidden xl:block xl:mr-10">
          <Image src="/FMComplete.png" alt="F&M" width={500} height={40} />
        </div>
      </div>
      <div className="flex justify-center xl:hidden ">
        <Image src="/FMComplete.png" alt="F&M" width={500} height={40} />
      </div>
    </main>
  );
}
