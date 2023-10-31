import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import ProfileBox from "@/features/Dashboard/components/ProfileBox";

export default function Dashboard() {
  return (
    <div className="flex lg:bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] lg:py-[3rem] lg:px-[5rem] bg-white">
      <SideBar />
      <div className=" w-[100%] lg:w-[76%] bg-white p-[2rem] lg:p-[2.5rem] ml-0 lg:ml-[24%] rounded-[2rem] ">
        <TalentHeader />
        <div className=" w-[100%] bg-jubalDashboardBackground rounded-[2rem] p-[2rem] mt-[2rem]">
          <p className="text-[1.8rem] font-[700] text-jubalFormText mb-[1rem] ">
            My Profile
          </p>
          <ProfileBox />
        </div>
      </div>
    </div>
  );
}
