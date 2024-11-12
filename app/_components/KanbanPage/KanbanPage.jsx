"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "./TaskModal";

const KanbanPage = () => {
  const [tasks, setTasks] = useState({
    todo: [{ id: 1, title: "Task 1", description: "Task 1 description" }],
    inProgress: [{ id: 2, title: "Task 2", description: "Task 2 description" }],
    completed: [{ id: 3, title: "Task 3", description: "Task 3 description" }],
  });

  const [modalOpen, setModalOpen] = useState(false);

  const addTaskToSection = (section) => {
    const newTask = {
      id: new Date().getTime(), // Generate a unique id based on timestamp
      title: `New task in ${section}`,
      description: `${section} task description`,
    };

    setTasks((prevTasks) => ({
      ...prevTasks,
      [section]: [...prevTasks[section], newTask],
    }));
  };

  const deleteTaskFromSection = (section, taskId) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [section]: prevTasks[section].filter((task) => task.id !== taskId),
    }));
  };

  const editTaskInSection = (section, taskId, updatedTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [section]: prevTasks[section].map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task,
      ),
    }));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveTask = (newTask) => {
    addTaskToSection("todo", newTask); // Add the task to the Todo section
    handleCloseModal(); // Close the modal after saving the task
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

        <div className="mt-12 grid grid-cols-1 gap-4 overflow-auto md:grid-cols-3 xl:gap-7">
          <KanbanColumn
            title="Todo"
            tasks={tasks.todo}
            onAddTask={handleOpenModal} // Open modal when adding a task
            onDeleteTask={deleteTaskFromSection}
            onEditTask={editTaskInSection}
          />
          <KanbanColumn
            title="In Progress"
            tasks={tasks.inProgress}
            onAddTask={handleOpenModal} // Open modal when adding a task
            onDeleteTask={deleteTaskFromSection}
            onEditTask={editTaskInSection}
          />
          <KanbanColumn
            title="Completed"
            tasks={tasks.completed}
            onAddTask={handleOpenModal} // Open modal when adding a task
            onDeleteTask={deleteTaskFromSection}
            onEditTask={editTaskInSection}
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
