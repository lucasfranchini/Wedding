"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Select, { SingleValue } from "react-select";

const ConfirmForm: React.FC<{
  setConfirmed: (isValid: boolean) => void;
}> = ({ setConfirmed }) => {
  const [names, setNames] = useState<string[]>([]);
  const [number, setNumber] = useState<
    SingleValue<{ value: number; label: string }>
  >({ value: 1, label: "1" });
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validNames = names.filter((name) => name);
    fetch("/api/addGuest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ names: validNames }),
    }).then(() => setConfirmed(true));
  };
  const fillInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const newNames = [...names];
    newNames[Number(name)] = value;
    setNames(newNames);
  };
  return (
    <form
      className="bg-white w-1/3 mt-16 flex flex-col items-center p-6 rounded-md"
      onSubmit={submitForm}
    >
      <div className="flex flex-col items-center gap-5 ">
        diga quantos convidades virão:
        <Select
          options={options}
          value={number}
          onChange={(value) => setNumber(value)}
        />
      </div>
      <div className="flex flex-col items-center gap-3 mt-6 w-full">
        Digite os nomes dos convidados:
        {Array.from({ length: number?.value || 1 }).map((_, index) => (
          <input
            key={index}
            name={`${index}`}
            onChange={fillInput}
            className="w-2/3 border h-10 rounded-lg outline-none text-center text-black"
          />
        ))}
      </div>
      <button
        className=" w-1/2 p-4 text-white bg-[#c58d69] text-center rounded mt-5"
        type="submit"
      >
        Enviar Lista
      </button>
    </form>
  );
};

export default ConfirmForm;
