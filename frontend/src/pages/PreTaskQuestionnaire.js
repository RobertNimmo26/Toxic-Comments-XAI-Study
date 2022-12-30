// import react components
import { useContext, useState } from "react";

// import components
import TitleNav from "../components/TitleNav";
import TipiQuestions from "../components/TipiQuestions";
import PreviousExperienceQuestion from "../components/PreviousExperienceQuestion";
import Alert from "react-bootstrap/Alert";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// import context
import PageContext from "../context/PageContext";
import PreTaskQuestionnaireContext from "../context/PreTaskQuestionnaireContext";

const PreTaskQuestionnaire = () => {
  const [unanswered, setUnanswered] = useState(false);

  const { page, setPage } = useContext(PageContext);
  const { preTaskForm, setPreTaskForm } = useContext(
    PreTaskQuestionnaireContext
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const unansweredResult = Object.values(preTaskForm).includes(-1);

    setUnanswered(unansweredResult);
    if (unansweredResult === true) {
      window.scrollTo(0, 0);
    } else {
      setPage(3);
    }
  };

  return (
    <>
      <Container>
        <TitleNav pageTitle={"Pre-task Questionnaire"} />

        {unanswered === true && (
          <Alert key="danger" variant="danger">
            Please answer all questions.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TipiQuestions />
          <br />
          <PreviousExperienceQuestion />
          <Button variant="primary" size="lg" type="submit">
            Continue
          </Button>
        </form>
      </Container>
    </>
  );
};

export default PreTaskQuestionnaire;
