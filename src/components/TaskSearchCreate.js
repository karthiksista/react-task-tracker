import React from "react";
import NewTaskButtonModal from "./NewTaskButtonModal";

function TaskSearchCreate({ parentCB, filterCB }) {
  const pcb = (val) => {
    parentCB(val);
  };

  const searchFilter = (val) => {
    filterCB(val);
  };

  return (
    <div className="search-create-wrapper">
      <div className="task-search-text">
        <span> Tasks </span>
      </div>
      <div className="search-buttons">
        <div className="search-input-wrapper">
          <input
            className="input-wrapper"
            type="text"
            placeholder="search"
            onChange={(e) => {
              searchFilter(e.target.value);
            }}
          />
        </div>
        <div className="new-task-search-button-wrapper">
          <NewTaskButtonModal
            parentCallBack={pcb}
            isEmpty={false}
            isEdit={false}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskSearchCreate;
