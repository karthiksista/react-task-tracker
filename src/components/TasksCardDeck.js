import React from "react";
import { Card, CardTitle, CardGroup, CardBody } from "reactstrap";

import DoughnutChart from "./DoughnutChart";
const TasksCardDeck = ({ data }) => {
  return (
    <CardGroup>
      <Card>
        <CardBody>
          <CardTitle className="tasks-completed-text">
            Tasks Completed
          </CardTitle>
          <span className="pending-tasks">{data.tasksCompleted}</span>
          <span className="total-tasks">/ {data.totalTasks}</span>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="tasks-completed-text">Latest Tasks</CardTitle>
          <span className="latest-tasks-text">
            {data?.latestTasks.map((task) => {
              return (
                <li
                  className={task.completed ? "label-strike-deck" : ""}
                  key={task._id}
                >
                  {task.name}
                </li>
              );
            })}
          </span>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="chart">
            <DoughnutChart taskData={data} />
          </div>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default TasksCardDeck;
