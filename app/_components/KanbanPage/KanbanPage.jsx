"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "./TaskModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  moveTask,
} from "@/app/redux/AllSlices/KanbanSLice";

const KanbanPage = () => {
  // Get tasks from Redux store
  const tasks = useSelector((state) => state.kanban.tasks);
  const dispatch = useDispatch();
  const [draggedTask, setDraggedTask] = useState(null);
  const [isOver, setIsOver] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("todo");

  // Open the modal and set the selected section
  const handleOpenModal = (section) => {
    setSelectedSection(section); // Set the section dynamically
    setModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Save a new task
  const handleSaveTask = (newTask) => {
    // Dispatch addTask action to add a task to the selected section
    dispatch(addTask({ section: selectedSection, task: newTask }));
    handleCloseModal();
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ section: selectedSection, task: taskId }));
  };

  // Edit a task
  const editTaskInSection = (section, taskId, updatedTask) => {
    dispatch(editTask({ section, taskId, updatedTask }));
  };

  // Handle drag start
  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (section) => {
    setIsOver(section);
  };

  const handleDrop = (section) => {
    if (draggedTask) {
      dispatch(moveTask({ section, taskId: draggedTask.id, draggedTask }));
      setDraggedTask(null);
      setIsOver(null);
    }
  };

  return (
    <>
      <div className="mb-28 px-4 lg:px-11">
        <div className="flex items-center justify-between gap-3">
          <div className="flex w-full items-center gap-3 md:gap-12">
            <h2 className="text-xl font-semibold">Kanban</h2>
            <div className="relative w-full max-w-[352px]">
              <input
                type="search"
                name="search"
                id="search"
                className="h-[42px] w-full rounded border border-darkGray bg-neutral-600 ps-9 text-xs text-neutral-400 outline-none"
                placeholder="Search for..."
              />
              <div className="absolute left-[14px] top-[14px]">
                <Image
                  width={13}
                  height={13}
                  src="/images/Search.svg"
                  alt="search"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <Link
            href="/users/add-users/personal-information"
            className="flex h-[30px] items-center justify-center whitespace-nowrap rounded bg-primary-1 px-4 text-xs font-medium text-white"
          >
            Sort by
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-7">
          <KanbanColumn
            title="Todo"
            tasks={tasks.todo}
            onAddTask={() => handleOpenModal("todo")}
            onDeleteTask={handleDeleteTask}
            onEditTask={editTaskInSection}
            onDragOver={() => handleDragOver("todo")}
            onDrop={() => handleDrop("todo")}
            isOver={isOver === "todo"}
            onDragStart={handleDragStart}
          />
          <KanbanColumn
            title="In Progress"
            tasks={tasks.inProgress}
            onAddTask={() => handleOpenModal("inProgress")}
            onDeleteTask={handleDeleteTask}
            onEditTask={editTaskInSection}
            onDragOver={() => handleDragOver("inProgress")}
            onDrop={() => handleDrop("inProgress")}
            isOver={isOver === "inProgress"}
            onDragStart={handleDragStart}
          />
          <KanbanColumn
            title="Completed"
            tasks={tasks.completed}
            onAddTask={() => handleOpenModal("completed")}
            onDeleteTask={handleDeleteTask}
            onEditTask={editTaskInSection}
            onDragOver={() => handleDragOver("completed")}
            onDrop={() => handleDrop("completed")}
            isOver={isOver === "completed"}
            onDragStart={handleDragStart}
          />
        </div>
      </div>

      {modalOpen && (
        <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} />
      )}
    </>
  );
};

export default KanbanPage;
