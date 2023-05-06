"use client";
import { FormEvent, useState } from "react";
import Select, { SingleValue } from "react-select";

const ConfirmForm: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [number, setNumber] = useState<
    SingleValue<{ value: number; label: string }>
  >({ value: 1, label: "1" });
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];
  console.log(number);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(names);
  };
  return (
    <form
      className="bg-white w-1/3 mt-16 flex flex-col items-center"
      onSubmit={submitForm}
    >
      <Select
        options={options}
        value={number}
        onChange={(value) => setNumber(value)}
      />
      {Array.from({ length: number?.value || 1 }).map((_, index) => (
        <input key={index} />
      ))}
      <button type="submit">teste</button>
    </form>
  );
};

export default ConfirmForm;
