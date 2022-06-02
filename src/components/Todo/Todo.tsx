import { FC, useEffect, useState } from "react";
import TodoForm from "./TodoForm";

import TodosContext from "../../context/TodoContext";
import { ITask } from "./Interfaces";

const Todo: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <TodosContext.Provider value={{ tasks, setTasks }}>
      <TodoForm />
    </TodosContext.Provider>
  );
};

export default Todo;
