import { FC, useState, ChangeEvent, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { ITask } from "./Interfaces";

const TodoForm: FC = () => {
  const [isDeadline, setIsDeadline] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskDeadline, setTaskDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.target.checked;
    setIsDeadline(checked);
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>): void =>
    setTaskName(event.target.value);

  const handleAddTaskButton = (): void => {
    setTaskList((prevTask) => [
      ...prevTask,
      { taskName, taskDescription, taskDeadline },
    ]);
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task name</Form.Label>
        <Form.Control
          onChange={handleChangeName}
          value={taskName}
          type="text"
          placeholder="Enter task name"
        />
        <Form.Text className="text-muted">Your task</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task description</Form.Label>
        <Form.Control type="text" placeholder="Enter task description" />
        <Form.Text className="text-muted">Your task description</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={(event) => handleCheckboxChange(event)}
          type="checkbox"
          label="Set deadline"
          checked={isDeadline}
        />
      </Form.Group>
      {isDeadline && (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task deadline</Form.Label>
          <Form.Control type="text" placeholder="Enter task description" />
          <Form.Text className="text-muted">
            Your task deadline in days
          </Form.Text>
        </Form.Group>
      )}
      <Button onClick={handleAddTaskButton} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
