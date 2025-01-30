import React from "react";
import { useState, useEffect, useRef } from "react";
function Todolist() {
  const [tasks, setTask] = useState([
    { id: 1, task: "Study" },
    { id: 2, task: "Play Cricket" },
    { id: 3, task: "Rest" },
  ]);
  const [task, changetask] = useState("");
  const [index, changeIndex] = useState(4);

  const handleChange = (event) => {
    changetask(event.target.value);
  };

  const addList = () => {
    if (task.length == 0) return;
    setTask((prevTasks) => [...prevTasks, { id: index, task }]);
    changeIndex(index + 1);
    console.log(tasks);
    console.log(typeof tasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        <ol>
          {/* {console.log(typeof tasks)}; */}
          {tasks.map((data) => (
            <li key={data.id}>Task: {data.task}</li>
          ))}
        </ol>
      </ul>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter task here"
      />
      <button onClick={addList}>Add Task</button>
    </div>
  );
}

export default Todolist;
