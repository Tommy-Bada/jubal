import Image from "next/image";
export default function FinancialStat() {
  return (
    <div className="p-[2rem]">
      <div className="flex justify-between p-[1rem]">
        <p className="text-[1.6rem] text-jubalFormText">Financial Statistics</p>
        <div className="flex items-center">
          <p className="text-[1.2rem] mr-[1rem] text-jubalFormText">Deposit</p>
          <div className="bg-[#0F973D] w-[2.5rem] h-[4px]"></div>
        </div>
        <div className="flex items-center">
          <p className="text-[1.2rem] mr-[1rem] text-jubalFormText">Transfer</p>
          <div className="bg-[#D42620] w-[2.5rem] h-[4px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[2rem] mt-[3rem]">
        <Image
          src="/dashboard/no-transactions.svg"
          alt="Financial Status"
          height="150"
          width="150"
        />
      </div>
      <p className="text-[1.6rem] text-jubalFormText text-center">
        Make a transaction to see your statistics.
      </p>
    </div>
  );
}
