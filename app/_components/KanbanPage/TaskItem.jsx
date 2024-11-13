"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import UploadfileIcon from "../Icons/UploadfileIcon";
import Msg from "../Icons/Msg";
import { RiCodeSSlashFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { deleteTask, editTask } from "@/app/redux/AllSlices/KanbanSLice";

const TaskItem = ({ task, section, onDeleteTask, onEditTask, onDragStart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [selectedSection, setSelectedSection] = useState();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDelete = (section, taskId) => {
    console.log("Deleting task from section:", section, "with ID:", taskId);
    onDeleteTask({ section: selectedSection, task: taskId }); // Calls parent delete function with correct args
  };

  const handleEdit = () => {
    editTask(task.section, task.id, editedTask); // Pass section, task id, and updated task
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedTask(task);
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
    <>
      <div draggable onDragStart={() => onDragStart(task)}>
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
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={handleCancel}
                className="mt-2 rounded bg-primary-1 px-2 py-1 text-sm text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="mt-2 rounded bg-primary-1 px-2 py-1 text-sm text-white"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-2 w-full rounded-lg border border-darkGray bg-neutral-600 p-3 lg:p-6">
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
                    <UploadfileIcon />
                    <span className="text-sm"> 2</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Msg /> <span className="text-sm"> 6 </span>
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
                <div
                  ref={dropdownRef}
                  className="relative cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <BsThreeDots />
                  {isDropdownOpen && (
                    <div className="absolute right-0 z-[999] mt-2 w-36 rounded-lg border border-darkGray bg-neutral-600 shadow-lg">
                      <button
                        onClick={() => setIsEditing(true)}
                        className="block w-full rounded-t-lg px-4 py-2 text-left text-sm text-neutral-400 duration-300 ease-in-out hover:bg-neutral-500 hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task.section, task.id)}
                        className="block w-full rounded-b-lg px-4 py-2 text-left text-sm text-red-800 duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TaskItem;
