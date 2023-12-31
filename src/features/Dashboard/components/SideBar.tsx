import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="w-[max-content] bg-white h-[94%] px-[2rem] py-[2rem] fixed  rounded-[2rem] mr-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src="Logo.png" alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="py-[2rem] px-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[86%] flex flex-col justify-between">
        <div>
          <SideBarItem
            image="dashboard/dashboard.svg"
            activeImage="dashboard/dashboard-active.svg"
            text="Dashboard"
            link="/dashboard"
            active={router.pathname === "/dashboard"}
          />
          <SideBarItem
            image="dashboard/briefcase.svg"
            activeImage="dashboard/briefcase-active.svg"
            text="My Manager"
            link="/manager"
            active={router.pathname === "/manager"}
          />
          <SideBarItem
            image="dashboard/bank-check.svg"
            activeImage="dashboard/bank-check-active.svg"
            text="My Bank"
            link="/bank"
            active={router.pathname === "/bank"}
          />
          <SideBarItem
            image="dashboard/card.svg"
            activeImage="dashboard/card-active.svg"
            text="My Profile"
            link="/profile"
            active={router.pathname === "/profile"}
          />
          <SideBarItem
            image="dashboard/email.svg"
            activeImage="dashboard/email-active.svg"
            text="My Message"
            link="/message"
            active={router.pathname === "/message"}
          />
        </div>
        <div>
          <SideBarItem
            image="dashboard/cogs.svg"
            activeImage="dashboard/cogs-active.svg"
            text="Settings"
            link="/settings"
            active={router.pathname === "/settings"}
          />
        </div>
      </div>
    </div>
  );
}
