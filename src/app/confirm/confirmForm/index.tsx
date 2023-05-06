"use client";
import { ChangeEvent, FormEvent, useState } from "react";
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
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validNames = names.filter((name) => name);
    console.log(validNames);
  };
  const fillInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const newNames = [...names];
    newNames[Number(name)] = value;
    setNames(newNames);
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
        <input key={index} name={`${index}`} onChange={fillInput} />
      ))}
      <button type="submit">teste</button>
    </form>
  );
};

export default ConfirmForm;
