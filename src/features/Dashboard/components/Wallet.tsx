import Image from "next/image";
export default function Wallet() {
  return (
    <div className="bg-white rounded-[0.8rem] w-[100%] px-[2rem] py-[3rem]">
      <div className="bg-gradient-to-r from-[#3F2883] to-[#2DA5A4] rounded-[1rem] w-[100%] px-[2rem] py-[3rem]">
        <div className="bg-white rounded-[50%] h-[4.4rem] w-[4.4rem] flex justify-center items-center mb-[1rem]">
          <Image
            src="/dashboard/bank-money.svg"
            alt="Money"
            width="18"
            height="12"
          />
        </div>
        <div className="flex items-center">
          <p className="text-white text-[1.4rem] mr-[1rem] font-[600]">
            Wallet Balance
          </p>
          <p className="text-white text-[1.6rem] font-[700]">Create Wallet</p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="bg-jubalViolet flex items-center px-[2rem] py-[1rem] rounded-[0.8rem] my-[4rem] mr-[2rem]">
          <Image
            src="/dashboard/add-funds.svg"
            alt="money Icon"
            height="14"
            width="20"
          />
          <p className="text-white text-[1.4rem] font-[600] ml-[1rem]">
            Add Funds
          </p>
        </div>
        <div className="bg-jubalViolet flex items-center px-[2rem] py-[1rem] rounded-[0.8rem] my-[4rem]">
          <Image
            src="/dashboard/remove-funds.svg"
            alt="money Icon"
            height="14"
            width="20"
          />
          <p className="text-white text-[1.4rem] font-[600] ml-[1rem]">
            Transfer Funds
          </p>
        </div>
        <div className="bg-jubalViolet flex items-center px-[2rem] py-[1rem] rounded-[0.8rem]">
          <Image
            src="/dashboard/add-funds.svg"
            alt="money Icon"
            height="14"
            width="20"
          />
          <p className="text-white text-[1.4rem] font-[600] ml-[1rem]">
            Generate Invoice
          </p>
        </div>
      </div>
    </div>
  );
}
