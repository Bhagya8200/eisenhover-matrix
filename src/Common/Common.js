import React from "react";
import './Common.css'
import tickImage from "../assets/check.png";
import untickImage from "../assets/circle.png";
import deleteIcon from "../assets/delete.png";

function Common({ todoList, toggleComplete, deleteTask }) {
  return (
    <div className="to-do-list-items">
      {todoList.map((item) => (
        <div className="items-container" key={item.id}>
          <div
            className={`task-info ${item.isComplete ? "completed-task" : ""}`}
            onClick={() => toggleComplete(item.id)}
          >
            <img
              id="tick_image"
              src={item.isComplete ? tickImage : untickImage}
              alt="tick"
            />
            <p id="task_name">{item.text}</p>
          </div>

          <img
            id="delete_icon"
            src={deleteIcon}
            alt="delete_icon"
            onClick={() => deleteTask(item.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Common;


