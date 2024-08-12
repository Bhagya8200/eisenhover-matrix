import "./App.css";
import React, { useRef, useState } from "react";
import Common from "./Common/Common";
import checked from "./assets/checked.png";
import delete_square from "./assets/delete-square.png";
import clock from "./assets/clock.png";
import add_friend from "./assets/add-friend.png";
function App() {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);

  const handleClick = (priority) => {
    setSelectedPriority(priority);
    add(priority);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };

  const add = (priority) => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      priority: priority,
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

  const renderTasksByPriority = (priority) => {
    return todoList.filter((task) => task.priority === priority);
  };

  return (
    <div className="wrapper">
      <h1>Prioritize your tasks using</h1>
      <h1 id="main-heading">EISENHOWER MATRIX</h1>
      <div className="add-task-field">
        <input
          ref={inputRef}
          id="input-field"
          type="text"
          placeholder="Add your task"
        />
        <button onClick={toggleDropdown} id="add-btn">
          ADD +
        </button>
      </div>
      {openDropDown && (
        <div className="drop-down">
          <div className="drop-down-items">
            <button onClick={() => handleClick("do_it")}>DO IT</button>
            <button onClick={() => handleClick("schedule_it")}>
              SCHEDULE IT
            </button>
            <button onClick={() => handleClick("delegate_it")}>
              DELEGATE IT
            </button>
            <button onClick={() => handleClick("delete_it")}>DELETE IT</button>
          </div>
        </div>
      )}

      <div className="eisenhover-matrix">
        <div></div>
        <div>
          <p id="urgent">URGENT</p>
        </div>
        <div>
          <p id="not-urgent">LESS URGENT</p>
        </div>
        <div className="important-div">
          <p id="important">IMPORTANT</p>
        </div>
        <div className="do-it-header">Urgent and Important</div>
        <div className="do_it">
          <div className="do_it_heading">
            <h1 className="do_it_heading">DO IT</h1>
            <img src={checked} alt="checked" />
          </div>

          <Common
            todoList={renderTasksByPriority("do_it")}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
        <div className="schedule-it-header">Important but Less Urgent</div>
        <div className="schedule_it">
          <div className="schedule_it_heading">
            <h1 className="schedule_it_heading">SCHEDULE IT</h1>
            <img src={clock} alt="clock" />
          </div>

          <Common
            todoList={renderTasksByPriority("schedule_it")}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
        <div className="not-important-div">
          <p id="not-important">LESS IMPORTANT</p>
        </div>
        <div className="delegate-it-header">Urgent but Less Important</div>
        <div className="delegate_it">
          <div className="delegate_it_heading">
            <h1 className="delegate_it_heading">DELEGATE IT</h1>
            <img src={add_friend} alt="add_friend" />
          </div>

          <Common
            todoList={renderTasksByPriority("delegate_it")}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
        <div className="delete-it-header">Less Important and Less Urgent</div>
        <div className="delete_it">
          <div className="delete_it_heading">
            <h1 className="delete_it_heading">DELETE IT</h1>
            <img src={delete_square} alt="delete_square" />
          </div>

          <Common
            todoList={renderTasksByPriority("delete_it")}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
