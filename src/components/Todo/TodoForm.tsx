import { FC, useState, ChangeEvent, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { ITask } from "./Interfaces";
import { TodoInput } from "./TodoInput";
import TodosContext from "../../context/TodoContext";

const TodoForm: FC = () => {
  const { setTasks } = useContext(TodosContext);
  const [isDeadline, setIsDeadline] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskDeadline, setTaskDeadline] = useState<string>("");

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.target.checked;
    setIsDeadline(checked);
  };

  const handleAddTaskButton = (): void => {
    setTasks((prev: ITask[]) => [
      ...prev,
      { id: uuidv4(), taskName, taskDescription, taskDeadline },
    ]);
  };

  const resetForm = () => {
    setIsDeadline(false);
    setTaskName("");
    setTaskDescription("");
    setTaskDeadline("");
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        resetForm();
      }}
      className="mb-3"
    >
      <TodoInput
        input={{
          title: "Task name",
          hint: "Your task",
          placeholder: "Enter task name",
        }}
        inputState={{ value: taskName, setter: setTaskName }}
      />
      <TodoInput
        input={{
          title: "Task description",
          hint: "Your task description",
          placeholder: "Enter task description",
        }}
        inputState={{ value: taskDescription, setter: setTaskDescription }}
      />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={(event) => handleCheckboxChange(event)}
          type="checkbox"
          label="Set deadline"
          checked={isDeadline}
        />
      </Form.Group>
      {isDeadline && (
        <TodoInput
          input={{
            title: "Task deadline",
            hint: "Your task deadline in days",
            placeholder: "For exp: 5 days",
          }}
          inputState={{ value: String(taskDeadline), setter: setTaskDeadline }}
        />
      )}
      <Button onClick={handleAddTaskButton} variant="primary" type="submit">
        Create Task
      </Button>
    </Form>
  );
};

export default TodoForm;
