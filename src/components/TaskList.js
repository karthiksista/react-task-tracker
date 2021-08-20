import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import trash from "./images/trash.png";
import NewTaskButtonModal from "./NewTaskButtonModal";
import API from "../utils/API";

const TaskList = ({ data, parentCB }) => {
  const pcb = (val) => {
    parentCB();
  };

  const toggleComplete = async (name, idx, val) => {
    await API.put(`/tasks/${idx}`, {
      name: name,
      completed: val,
    });
    parentCB();
  };

  const deleteTask = async (idx) => {
    await API.delete(`/tasks/${idx}`);
    parentCB();
  };

  return (
    <ListGroup flush>
      {data.map((task, i) => {
        return (
          <ListGroupItem key={task._id}>
            <div className="task-list">
              <div className="tasklist-1">
                <input
                  className="task-check-box"
                  id="checkid"
                  type="checkbox"
                  value="test"
                  checked={task.completed ? true : false}
                  onChange={(e) => {
                    toggleComplete(task.name, task._id, e.target.checked);
                  }}
                />
                <label
                  className={task.completed ? "label-strike" : "label-text"}
                  htmlFor="checkid"
                >
                  {task.name}
                </label>
              </div>
              <div className="task-list-2">
                <NewTaskButtonModal
                  parentCallBack={pcb}
                  isEmpty={false}
                  isEdit={true}
                  data={task}
                  idx={task._id}
                />
                <img
                  className="trash"
                  src={trash}
                  alt="trash"
                  onClick={() => deleteTask(task._id)}
                />
              </div>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default TaskList;
