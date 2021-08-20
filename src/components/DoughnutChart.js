import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ taskData }) => {
  const completedTasks = taskData.tasksCompleted;
  const notCompleted = taskData.totalTasks - completedTasks;
  const data = {
    labels: ["Completed", "NotCompleted"],
    datasets: [
      {
        label: "# of Votes",
        data: [completedTasks, notCompleted],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
