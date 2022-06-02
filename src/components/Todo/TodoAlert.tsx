import { FC } from "react";
import { Alert } from "react-bootstrap";

import { ITodoAlert } from "./Interfaces";

interface Props {
  showAlert: ITodoAlert;
}

const TodoAlert: FC<Props> = (props) => {
  const { showAlert } = props;
  const { variant, text } = showAlert;
  return (
    <Alert className="mt-3" variant={variant}>
      {text}
    </Alert>
  );
};

export default TodoAlert;
