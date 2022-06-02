import { FC, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import { TodosContext, AlertContext } from "../../context";
import { ITask, ITodoAlert } from "./Interfaces";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showAlert, setShowAlert] = useState<ITodoAlert>({
    isShow: false,
    variant: "",
    text: "",
  });

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
      <AlertContext.Provider value={{ showAlert, setShowAlert }}>
        <Col sm={12} md={6}>
          <TodoForm />
        </Col>
        <Col sm={12} md={6}>
          <div style={todoListStyles}>
            <TodoList />
          </div>
        </Col>
      </AlertContext.Provider>
    </TodosContext.Provider>
  );
};

export default Todo;
