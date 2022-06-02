import { FC, ChangeEvent } from "react";
import { Form } from "react-bootstrap";

import { IInputState, IInput } from "./Interfaces";

interface Props {
  input: IInput;
  inputState: IInputState;
}

const TodoInput: FC<Props> = (props) => {
  const { input, inputState } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    inputState.setter(event.target.value);

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{input.title}</Form.Label>
      <Form.Control
        value={inputState.value}
        type="text"
        placeholder={input.placeholder}
        onChange={handleChange}
      />
      <Form.Text className="text-muted">{input.hint}</Form.Text>
    </Form.Group>
  );
};

export default TodoInput;
