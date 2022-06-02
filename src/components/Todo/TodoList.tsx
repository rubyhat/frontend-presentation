import { FC, useContext } from "react";
import { Alert, Button, Card } from "react-bootstrap";

import { TodosContext, AlertContext } from "../../context";
import { ITask } from "./Interfaces";

const TodoList: FC = () => {
  const { tasks, setTasks } = useContext(TodosContext);
  const { setShowAlert } = useContext(AlertContext);

  const handleDeleteTaskButton = (taskId: string) => {
    setTasks((prevTasks: ITask[]) =>
      [...prevTasks].filter((task: ITask) => task.id !== taskId)
    );
    setShowAlert({ isShow: true, variant: "danger", text: "Task deleted!" });
  };

  return (
    <>
      {tasks && tasks.length === 0 && (
        <Alert variant="info">Create your first task!</Alert>
      )}
      {tasks &&
        [...tasks].reverse().map((task: ITask, key: number) => (
          <Card className="mb-3" key={key}>
            <Card.Header className="d-flex align-items-center justify-content-between">
              {key === 0 ? "New task" : "Task"}{" "}
              <Button
                onClick={() => handleDeleteTaskButton(task.id)}
                variant="danger"
                size="sm"
              >
                X
              </Button>
            </Card.Header>
            <Card.Body>
              <Card.Title>{task.taskName}</Card.Title>
              <Card.Text>{task.taskDescription}</Card.Text>
              {task.taskDeadline && (
                <Button variant="warning" disabled>
                  <strong>Deadline: </strong>
                  {task.taskDeadline}
                </Button>
              )}
              {!task.taskDeadline && (
                <div className="alert alert-success">
                  This task hasn't any deadlines!
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default TodoList;
