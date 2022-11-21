// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// import context
import PageContext from "../context/PageContext";

const PreTaskQuestionnaire = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Container>
        <TitleNav pageTitle={"Pre-task Questionnaire"} />
        <p>Questions from questionnaire</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setPage(3);
          }}
        >
          Continue
        </Button>
      </Container>
    </>
  );
};

export default PreTaskQuestionnaire;
