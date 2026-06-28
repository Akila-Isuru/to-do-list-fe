import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodo] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/todo");
    setTodo(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
