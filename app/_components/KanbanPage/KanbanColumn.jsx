import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import UploadfileIcon from "../Icons/UploadfileIcon";
import Msg from "../Icons/Msg";
import { BsThreeDots } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";

const KanbanColumn = ({ title, tasks }) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-sm font-medium text-neutral-400">{title} </h2>
          <p className="flex size-4 items-center justify-center rounded-sm border border-[#575DFF80] text-xs text-gray-400">
            {tasks.length}
          </p>
        </div>
        <button className="flex h-[49px] w-full items-center justify-center rounded-lg border border-darkGray bg-neutral-600">
          <FaPlus />
        </button>
        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="w-full rounded-lg border border-darkGray bg-neutral-600 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {task.team.map((member, index) => (
                    <div
                      key={index}
                      className="h-7 w-7 rounded-full bg-primary-1 text-white"
                    >
                      <Image
                        width={24}
                        height={24}
                        unoptimized
                        src={member}
                        alt="imgae"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <UploadfileIcon /> {task.comments}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Msg /> {task.files}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{task.title}</h3>
              <p className="mt-2 text-xs font-medium leading-[18px] text-neutral-400">
                {task.description}
              </p>
              <div className="mt-9 flex items-center justify-between">
                <div>
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex h-5 cursor-pointer items-center gap-2 rounded border border-[#10193466] bg-[#57C3FF33] px-2 text-[10px] text-white"
                    >
                      <RiCodeSSlashFill className="text-sm text-cyanBlue" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="cursor-pointer">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KanbanColumn;
