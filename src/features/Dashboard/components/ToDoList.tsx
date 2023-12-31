import ToDoListItem from "./ToDoListItem";
import Image from "next/image";

export default function ToDoList() {
  return (
    <div className="bg-white rounded-[2rem] w-[48%] p-[2rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <div className=" rounded-[50%] bg-jubalDashboardBackground w-[5rem] h-[5rem] flex justify-center items-center ">
            <Image
              src="dashboard/todolist.svg"
              alt="Notification Icon"
              width="20"
              height="20"
            />
          </div>
          <p className="text-jubalNav text-[1.6rem] font-[700] ml-[1rem]">
            To do List
          </p>
        </div>
        <p className="text-[1.4rem]">Add New Task</p>
      </div>
      <div className="bg-jubalDashboardBackground px-[2rem] py-[3rem] rounded-[1rem] mt-[2rem]">
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
      </div>
    </div>
  );
}
