"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UploadfileIcon from "../Icons/UploadfileIcon";
import Msg from "../Icons/Msg";
import { RiCodeSSlashFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { deleteTask, editTask } from "@/app/redux/AllSlices/KanbanSLice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    deleteTask(task.section, task.id); // Pass the section and id for deletion
  };

  const handleEdit = () => {
    editTask(task.section, task.id, editedTask); // Pass section, task id, and updated task
    setIsEditing(false);
  };

  const tasksImages = [
    "/images/Ellipse 96.png",
    "/images/Ellipse 96 (1).png",
    "/images/Group 39488.png",
    "/images/Ellipse 96 (1).png",
  ];

  const tags = ["Bug", "Feature", "Urgent"];

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="rounded-xl border border-darkGray bg-neutral-600 p-4">
          <div className="mb-2">
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
              className="h-[42px] w-full rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none lg:max-w-[365px]"
            />
          </div>
          <div>
            <textarea
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              className="h-24 w-full rounded border border-darkGray bg-transparent p-3 text-xs font-medium text-neutral-400 outline-none lg:max-w-[365px]"
            />
          </div>
          <button
            onClick={handleEdit}
            className="mt-2 rounded bg-primary-1 px-2 py-1 text-sm text-white"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)} className="text-blue-500">
            Edit
          </button>
          <button onClick={handleDelete} className="ml-2 text-red-500">
            Delete
          </button>
          <div className="mt-2 w-full rounded-lg border border-darkGray bg-neutral-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {tasksImages.map((image, index) => (
                  <div
                    key={index}
                    className="h-7 w-7 rounded-full bg-primary-1 text-white"
                  >
                    <Image
                      width={24}
                      height={24}
                      unoptimized
                      src={image}
                      alt={`team member ${index}`}
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
            <h3 className="mt-4 break-words text-sm font-semibold">
              {editedTask.title}
            </h3>
            <p className="mt-2 max-h-28 overflow-y-auto break-words text-xs font-medium leading-[18px] text-neutral-400">
              {editedTask.description}
            </p>
            <div className="mt-9 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
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
        </>
      )}
    </div>
  );
};

export default TaskItem;
