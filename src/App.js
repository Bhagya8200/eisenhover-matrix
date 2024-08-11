import "./App.css";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  return (
    <>
      {/* <ToDoList /> */}
      <div className="wrapper">
        <h1>Prioritize your tasks</h1>
        <div className="eisenhover-matrix">
          <div></div>
          <div>
              URGENT
            
          </div>
          <div>
            <p>NOT URGENT</p>
          </div>
          <div>
            <p>IMPORTANT</p>
          </div>
          <div className="do_it">
            <h1 className="do_it_heading">DO IT</h1>
          </div>

          <div className="schedule_it">
          <h1 className="schedule_it_heading">SCHEDULE IT</h1>
          </div>
          <div>
            <pre>
            NOT IMPORTANT
            </pre>
          </div>
          
          <div className="delegate_it">
          <h1 className="delegate_it_heading">DELEGATE IT</h1>
          </div>
          <div className="delete_it">
          <h1 className="delete_it_heading">DELETE IT</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
