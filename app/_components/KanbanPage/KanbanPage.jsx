import Image from "next/image";
import Link from "next/link";
import React from "react";
import KanbanColumn from "./KanbanColumn";

const KanbanPage = () => {
  const tasks = {
    todo: [
      {
        id: 1,
        title: "Landing page design & development",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Development"],
        subtasks: ["About page", "Careers page"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 2,
        files: 4,
      },
      {
        id: 2,
        title: "Landing page design & development",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Development"],
        subtasks: ["About page", "Careers page"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 2,
        files: 4,
      },
    ],
    inProgress: [
      {
        id: 3,
        title: "Mobile app UI/UX design & development",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Development"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 10,
        files: 2,
      },
      {
        id: 4,
        title: "Mobile app UI/UX design & development",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Development"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 10,
        files: 2,
      },
      {
        id: 5,
        title: "Mobile app UI/UX design & development",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Development"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 10,
        files: 2,
      },
    ],
    completed: [
      {
        id: 6,
        title: "SEO campaign",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Marketing"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 12,
        files: 10,
      },
      {
        id: 7,
        title: "SEO campaign",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Marketing"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 12,
        files: 10,
      },
      {
        id: 8,
        title: "SEO campaign",
        description:
          "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.",
        tags: ["Marketing"],
        team: [
          "/images/Ellipse 96.png",
          "/images/Ellipse 96 (1).png",
          "/images/Group 39488.png",
          "/images/Ellipse 96 (1).png",
        ],
        comments: 12,
        files: 10,
      },
    ],
  };

  return (
    <>
      <div className="mb-28 px-11">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-12">
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

        <div className="mt-12 grid grid-cols-3 gap-7 overflow-auto">
          <KanbanColumn title="To Do" tasks={tasks.todo} />
          <KanbanColumn title="In Progress" tasks={tasks.inProgress} />
          <KanbanColumn title="Completed" tasks={tasks.completed} />
        </div>
      </div>
    </>
  );
};

export default KanbanPage;
