import { Col, Container, Row } from "react-bootstrap";
import { Header } from "./components/Header";
import Todo from "./components/Todo/Todo";

// Todo:
// Add typescript
// Add Readme
// Add react-testing-library
// Add storybook
// Add axios and jsonplaceholder
// Add mobx/redux
// Add pop-up which fired on click buttons in form

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
          <Todo />
        </Row>
      </Container>
    </div>
  );
};

export default App;
