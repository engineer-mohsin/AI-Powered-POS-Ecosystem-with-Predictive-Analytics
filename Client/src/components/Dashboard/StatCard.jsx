import React from "react";
import { Card } from "../UI/Card"; // Make sure this exists or replace with div and styling
import { ArrowUp, ArrowDown } from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  changeType = "increase",
  color = "teal",
}) => {
  const isPositive = changeType === "increase";

  const colors = {
    teal: "text-teal-600 bg-teal-100",
    blue: "text-blue-600 bg-blue-100",
    purple: "text-purple-600 bg-purple-100",
    amber: "text-amber-600 bg-amber-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <Card className="h-full p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h4 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{value}</h4>
        </div>
        <div className={`p-3 rounded-full ${colors[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-4 flex items-center">
        <span
          className={`flex items-center text-sm ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 mr-1" />
          )}
          {change}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">since last month</span>
      </div>
    </Card>
  );
};

export default StatCard;
