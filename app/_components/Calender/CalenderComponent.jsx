"use client";
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  isSameDay,
  isToday,
  startOfWeek,
  endOfWeek,
  subDays,
  addDays,
} from "date-fns";

const CalenderComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate data for each month
  const months = Array.from({ length: 12 }, (_, i) => {
    const monthStart = startOfMonth(addMonths(new Date(2024, 0), i));
    const monthEnd = endOfMonth(monthStart);

    // Find the start of the week for the first day of the month
    const monthStartWeekStart = startOfWeek(monthStart);
    // Find the end of the week for the last day of the month
    const monthEndWeekEnd = endOfWeek(monthEnd);

    // Create an array of all days to cover exactly 5 rows (35 days)
    const days = eachDayOfInterval({
      start: monthStartWeekStart,
      end: addDays(monthStartWeekStart, 34),
    });

    return {
      month: format(monthStart, "MMMM yyyy"),
      days,
      monthStart,
      monthEnd,
    };
  });

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="grid grid-cols-1 rounded-md bg-neutral-600 text-white md:grid-cols-2 lg:grid-cols-3">
      {months.map(({ month, days, monthStart, monthEnd }, index) => (
        <div key={index} className="border-b border-r border-darkGray p-5">
          <h3 className="mb-4 text-start text-sm font-normal">{month}</h3>
          <div className="grid grid-cols-7 gap-4 text-center text-sm text-white">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            {days.map((day, i) => {
              const isCurrentMonth = day >= monthStart && day <= monthEnd;
              return (
                <div
                  key={i}
                  onClick={() => handleDateClick(day)}
                  className={`flex size-7 flex-shrink-0 cursor-pointer items-center justify-center rounded-full ${isToday(day) ? "bg-primary-1 text-white" : ""} ${selectedDate && isSameDay(day, selectedDate) ? "bg-primary-1 text-white" : ""} ${isCurrentMonth ? "text-white" : "text-neutral-400"} ${format(day, "d") === "1" ? "font-bold" : ""}`}
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalenderComponent;
