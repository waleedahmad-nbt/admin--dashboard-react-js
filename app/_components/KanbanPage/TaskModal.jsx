"use client";
import React, { useState } from "react";

const TaskModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
    };
    onSave(newTask); // Call onSave to add the task
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the overlay is clicked
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800 bg-opacity-90"
      onClick={handleOverlayClick}
    >
      <div className="SideBarShadow w-96 rounded-lg bg-neutral-600 p-6">
        <h2 className="mb-4 text-xl font-semibold">Add New Task</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-[42px] w-full rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none lg:max-w-[365px]"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-24 w-full rounded border border-darkGray bg-transparent p-3 text-xs font-medium text-neutral-400 outline-none lg:max-w-[365px]"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="flex h-[30px] items-center justify-center gap-1 whitespace-pre rounded bg-primary-1 p-2 text-xs font-medium leading-[14px]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex h-[30px] items-center justify-center gap-1 whitespace-pre rounded bg-primary-1 p-2 text-xs font-medium leading-[14px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
