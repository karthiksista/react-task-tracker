import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { AuthContext, UserContext } from "../utils/AuthContext";
import API from "../utils/API";
import NavbBar from "./NavBar";
import NewTaskButtonModal from "./NewTaskButtonModal";
import TaskDashBoadrd from "./TasksDashboard";
import SkeletonArticle from "./skeletons/SkeletonArticle";

function Dashboard() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { value, setValue } = useContext(UserContext);
  const [tasksData, setTasksData] = useState({});
  const [loading, setLoading] = useState(true);

  const getTodos = async () => {
    const response = await API.get("/dashboard");
    setTasksData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    setValue(localStorage.getItem("userName"));
    setIsAuth(localStorage.getItem("isAuthorized"));
    getTodos();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div>
        <NavbBar value={value} />
      </div>
      <div className="dashboard-wrapper-tasks">
        {loading ? (
          [1].map((n) => <SkeletonArticle key={n} />)
        ) : tasksData.totalTasks > 0 ? (
          <TaskDashBoadrd data={tasksData} parentCallBack={getTodos} />
        ) : (
          <NewTaskButtonModal parentCallBack={getTodos} isEmpty={true} />
        )}
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
