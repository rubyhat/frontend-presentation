import { Col, Container, Row } from "react-bootstrap";
import Todo from "./components/Todo/Todo";

// Todo:
// Add typescript
// Add Readme
// Add react-testing-library
// Add storybook
// Add axios and jsonplaceholder
// Add mobx/redux

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
            <header className="App-header">
              <h1>Todo with React and Typescript</h1>
            </header>
          </Col>
          <Col sm={12}>
            <Todo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
