import React from "react";

interface CardProps {
  title: string;
  value: string;
  dateRange: string;
  change?: string;
  icon?: React.ReactNode;
  changeColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  dateRange,
  change,
  icon,
  changeColor,
}) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-row gap-16 items-center w-80 h-40">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
        <p className={`text-sm ${changeColor || "text-gray-500"}`}>{change}</p>
      </div>
      <div className="text-4xl">{icon}</div>
    </div>
  );
};

export default Card;
