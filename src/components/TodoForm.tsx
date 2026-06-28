import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import axios from "axios";

function TodoForm() {
  const [task, setTask] = useState("");
  const { fetchTodos } = useContext(TodoContext);

  const add = async () => {
    await axios.post("http://localhost:5000/api/v1/todo", { task, completed: false  });
    setTask("");
    fetchTodos();
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e: any) => {
          setTask(e.target.value);
        }}
        placeholder="Enter the task"
      />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default TodoForm;
