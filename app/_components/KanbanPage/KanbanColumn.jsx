import React from "react";
import { FaPlus } from "react-icons/fa6";
import TaskItem from "./TaskItem";

const KanbanColumn = ({
  title,
  tasks,
  onAddTask,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-sm font-medium text-neutral-400">{title}</h2>
        <p className="flex size-4 items-center justify-center rounded-sm border border-[#575DFF80] text-xs text-gray-400">
          {tasks.length}
        </p>
      </div>
      <button
        onClick={onAddTask}
        className="flex h-[49px] w-full items-center justify-center rounded-lg border border-darkGray bg-neutral-600"
      >
        <FaPlus />
      </button>
      <div className="mt-5 space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
