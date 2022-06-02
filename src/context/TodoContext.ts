import React from "react";
import { ITaskContent } from "../components/Todo/Interfaces";

const TodosContext = React.createContext<ITaskContent>({
  tasks: [],
  setTasks: () => {},
});

export default TodosContext;
