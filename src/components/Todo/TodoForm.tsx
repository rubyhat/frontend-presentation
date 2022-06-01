import { FC, useState, ChangeEvent } from "react";
import { Form, Button } from "react-bootstrap";

const TodoForm: FC = () => {
  const [deadline, setDeadline] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    console.log(checked);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task name</Form.Label>
        <Form.Control type="text" placeholder="Enter task name" />
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
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
