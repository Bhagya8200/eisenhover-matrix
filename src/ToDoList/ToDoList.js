import logo from "../assets/to-do-list.png";
import tick from "../assets/check.png";
import untick from "../assets/circle.png";
import delete_icon from "../assets/delete.png";
import React, { useRef, useState } from "react";
import './ToDoList.css'

function ToDoList() {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();
  
    const add = () => {
      const inputText = inputRef.current.value.trim();
  
      if (inputText === "") {
        return null;
      }
  
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };
      setTodoList((prev) => [...prev, newTodo]);
      inputRef.current.value = "";
    };
  
    const toggleComplete = (id) => {
      setTodoList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isComplete: !item.isComplete } : item
        )
      );
    };
  
    const deleteTask = (id) => {
      setTodoList((prev) => prev.filter((item) => item.id !== id));
    };
  
    return (
      <div className="main-container">
        <div className="to-do-list-container">
          {/* title */}
          <div className="title">
            <img className="to-do-list-logo" src={logo} alt="to-do-list logo" />
            <h1 className="heading">To-Do List</h1>
          </div>
  
          {/* input box */}
          <div className="add-task-field">
            <input
              ref={inputRef}
              id="input-field"
              type="text"
              placeholder="Add your task"
            />
            <button onClick={add} id="add-btn">
              ADD +
            </button>
          </div>
  
          {/* todo list */}
          <div className="to-do-list-items">
            {todoList.map((item) => (
              <div className="items-container" key={item.id}>
                <div
                  className={`task-info ${
                    item.isComplete ? "completed-task" : ""
                  }`}
                  onClick={() => toggleComplete(item.id)}
                >
                  <img
                    id="tick_image"
                    src={item.isComplete ? tick : untick}
                    alt="tick"
                  />
                  <p id="task_name">{item.text}</p>
                </div>
  
                <img
                  id="delete_icon"
                  src={delete_icon}
                  alt="delete_icon"
                  onClick={() => deleteTask(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ToDoList;