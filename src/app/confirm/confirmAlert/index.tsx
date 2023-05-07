const ConfirmAlert: React.FC<{ setConfirmed: (isValid: boolean) => void }> = ({
  setConfirmed,
}) => {
  return (
    <div className="bg-white md:w-1/3 mt-16 flex flex-col items-center p-6 rounded-md">
      <h1 className=" mb-5 text-black text-2xl">Confirmado</h1>
      <span className="text-gray-700 text-sm">
        Obrigado por confirmar sua presença!
      </span>
      <button
        className="w-1/2 p-4 text-white bg-[#c58d69] text-center rounded mt-8"
        onClick={() => setConfirmed(false)}
      >
        Voltar{" "}
      </button>
    </div>
  );
};

export default ConfirmAlert;
