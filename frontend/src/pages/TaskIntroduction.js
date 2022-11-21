// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// import context
import PageContext from "../context/PageContext";

const TaskIntroduction = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Container>
        <TitleNav pageTitle={"Task Introduction"} />
        <p>Introduction to the task</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setPage(4);
          }}
        >
          Continue
        </Button>
      </Container>
    </>
  );
};

export default TaskIntroduction;
