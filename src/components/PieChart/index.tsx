"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Rent", "Food", "Utilities", "Entertainment", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [400, 300, 200, 100, 50],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
