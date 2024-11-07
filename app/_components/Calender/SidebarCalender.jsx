"use client";
import { useState, useEffect } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const SidebarCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    setCurrentMonth(day); // Update current month to show the selected date's month
  };

  // Keep the current date highlighted
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000); // Update today every second
    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  const renderHeader = () => {
    const displayDate = isSameMonth(currentMonth, today) ? today : selectedDate;
    return (
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs font-normal text-white">
          {format(displayDate, "MMMM dd, yyyy")}
        </div>
        <div className="flex items-center text-xl">
          <button onClick={prevMonth} className="text-neutral-400">
            <GoTriangleLeft />
          </button>
          <button onClick={nextMonth} className="text-neutral-400">
            <GoTriangleRight />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE"; // Single character weekday name

    for (let i = 0; i < 7; i++) {
      const day = format(addDays(startOfWeek(currentMonth), i), dateFormat);
      days.push(
        <div className="text-center text-xs text-neutral-400" key={i}>
          {day}
        </div>,
      );
    }
    return <div className="mb-2 grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isSelected = isSameDay(cloneDay, selectedDate);
        const isToday = isSameDay(cloneDay, today); // Check if it's today
        days.push(
          <div
            onClick={() => onDateClick(cloneDay)}
            className={`flex size-7 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-center text-xs ${
              isSameMonth(day, monthStart) ? "text-white" : "text-neutral-400"
            } ${
              isSelected ? "activedate bg-primary-1 text-white" : ""
            } ${isToday ? "bg-primary-1 text-white" : ""}`} // Highlight current day
            key={day}
          >
            {format(day, "d")}
          </div>,
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-y-5" key={day}>
          {days}
        </div>,
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="mx-auto max-w-xs rounded-lg border border-[#F1F4FA] bg-transparent p-3 text-gray-200 shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default SidebarCalender;
