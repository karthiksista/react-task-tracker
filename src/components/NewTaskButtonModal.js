import React, { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import API from "../utils/API";
import pen from "./images/pen.png";

const NewTaskButtonModal = ({ parentCallBack, isEmpty, isEdit, data, idx }) => {
  const inputRef = useRef("");

  const [modal, setModal] = useState(false);

  const [inputVal, setInputVal] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const addTask = async () => {
    const response = await API.post("/tasks", { name: inputRef.current.value });
    setModal(!modal);
    parentCallBack(response.data);
  };

  const editTask = async () => {
    const response = await API.put(`/tasks/${data._id}`, {
      name: inputRef.current.value,
      completed: data.completed,
    });
    setModal(!modal);
    parentCallBack(response.data);
  };

  const updateVal = (val) => {
    setInputVal(val);
  };

  const openEdit = (name) => {
    setInputVal(name);
    setModal(!modal);
  };

  return (
    <div
      className={isEmpty ? "no-task-wrapper" : "new-task-search-button-wrapper"}
    >
      {isEmpty ? <span className="no-task-text"> You have no task </span> : ""}

      <div className="new-task-button">
        {isEdit ? (
          <img
            className="pen"
            src={pen}
            onClick={() => openEdit(data.name)}
            alt="pen"
          />
        ) : (
          <Button
            className={isEmpty ? "" : "new-task-search-button"}
            onClick={() => openEdit("")}
          >
            + New Task{" "}
          </Button>
        )}
      </div>

      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader> {isEdit ? "Edit Task" : "+ New Task"} </ModalHeader>
        <ModalBody>
          <div className="modal-input">
            <input
              ref={inputRef}
              className="input-block"
              type="text"
              name="name"
              placeholder="Task Name"
              value={inputVal}
              onChange={(e) => updateVal(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div>
            <Button
              className="new-task-footer-button"
              onClick={isEdit ? () => editTask() : () => addTask()}
            >
              {" "}
              {isEdit ? "Edit Task" : "+ New Task"}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NewTaskButtonModal;
