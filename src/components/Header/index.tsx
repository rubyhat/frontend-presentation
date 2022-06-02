import { Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Col sm={12}>
      <header className="App-header py-3">
        <h1>Todo with React and Typescript</h1>
        <a href="https://github.com/rubyhat" target="_blank" rel="noreferrer">
          Code on GitHub
        </a>
      </header>
    </Col>
  );
};
