import React, { useState, useEffect } from "react";
import TasksCardDeck from "./TasksCardDeck";
import TaskList from "./TaskList";
import TaskSearchCreate from "./TaskSearchCreate";
import API from "../utils/API";

const TaskDashBoadrd = ({ data, parentCallBack }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [tasksData, setTasksData] = useState(data);

  const getTodos = async () => {
    const response = await API.get("/dashboard");
    setTasksData(response.data);
  };

  const getAllTasks = async () => {
    const response = await API.get("/tasks");
    setAllTasks(response.data.tasks);
  };

  const refreshData = () => {
    getTodos();
    getAllTasks();
  };

  const filterTasks = (val) => {
    let currentTodos = [];
    let newList = [];
    if (val !== "") {
      currentTodos = allTasks;
      newList = currentTodos.filter((todo) => {
        const lc = todo.name.toLowerCase();
        const filter = val.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      getAllTasks();
    }
    setAllTasks(newList);
  };

  useEffect(() => {
    getTodos();
    getAllTasks();
  }, []);

  return (
    <>
      <TasksCardDeck data={tasksData} />
      <TaskSearchCreate parentCB={refreshData} filterCB={filterTasks} />
      <TaskList data={allTasks} parentCB={refreshData} />
    </>
  );
};

export default TaskDashBoadrd;
