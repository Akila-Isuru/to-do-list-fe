import axios from "axios";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos, fetchTodos } = useContext(TodoContext);

  const handleDeleet = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Todo list</h2>
      <ul>
        {todos.map((item: any) => {
          return (
            <li key={item._id}>
              {item.task}
              <button
                onClick={(e: any) => {
                  handleDeleet(item._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
