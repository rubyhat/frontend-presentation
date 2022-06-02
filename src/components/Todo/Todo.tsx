import { FC, useEffect, useState } from "react";
import TodoForm from "./TodoForm";

import TodosContext from "../../context/TodoContext";
import { ITask } from "./Interfaces";
import { Col } from "react-bootstrap";
import TodoList from "./TodoList";

const Todo: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const todoListStyles = {
    maxHeight: "500px",
    overflow: "scroll",
    paddingTop: "30px",
  };

  return (
    <TodosContext.Provider value={{ tasks, setTasks }}>
      <Col sm={12} md={6}>
        <TodoForm />
      </Col>
      <Col sm={12} md={6}>
        <div style={todoListStyles}>
          <TodoList />
        </div>
      </Col>
    </TodosContext.Provider>
  );
};

export default Todo;
