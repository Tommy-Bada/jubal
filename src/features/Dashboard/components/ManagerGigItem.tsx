import Image from "next/image";
import { Button } from "@material-tailwind/react";
interface GigItemProps {
  profileImage: string;
  title: string;
  name: string;
  startPrice: string;
  endPrice: string;
  location: string;
  action: string;
  btnColor: string;
}

export default function ManageGigItem({
  profileImage,
  title,
  name,
  startPrice,
  endPrice,
  location,
  action,
  btnColor,
}: GigItemProps) {
  const buttonStyle = {
    background: btnColor,
  };
  return (
    <div className="bg-white p-[2rem] rounded-[3rem] my-[2rem] flex items-start justify-between ">
      <div className="flex items-center  w-[35%]">
        <Image
          src={`/${profileImage}`}
          alt={`${profileImage} icon`}
          width="40"
          height="40"
        />
        <div className="ml-[1rem]">
          <p className="text-[1.6rem] font-[700] text-jubalNav">{title}</p>
          <p className="text-[1.2rem] mt-[1rem]">{name}</p>
        </div>
      </div>

      <div>
        <div className="flex mb-[2rem] ">
          <Image
            src="dashboard/pay.svg"
            alt="Currency Icon"
            width="22"
            height="16"
          />
          <p className="text-[1.2rem] text-jubalNav ml-[.5rem]">
            {`$${startPrice} - $${endPrice} `}
            <span className="text-[1.2rem] text-jubalFooterText">
              {" "}
              / monthly
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="dashboard/location.svg"
            alt="Location Icon"
            width="14"
            height="20"
          />
          <p className="text-[1.4rem] text-jubalNav ml-[.5rem]">{location}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="filled"
          className={` text-[1.4rem] normal-case text-white`}
          style={buttonStyle}
        >
          {action}
        </Button>
      </div>
    </div>
  );
}
