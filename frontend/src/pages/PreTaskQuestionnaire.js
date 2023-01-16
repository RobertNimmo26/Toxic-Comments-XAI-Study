// import react components
import { useContext, useState } from "react";

// import components
import TitleNav from "../components/TitleNav";
import TipiQuestions from "../components/pre_task_questions/TipiQuestions";
import PreviousExperienceQuestion from "../components/pre_task_questions/PreviousExperienceQuestion";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// import context
import PageContext from "../context/PageContext";
import PreTaskQuestionnaireContext from "../context/PreTaskQuestionnaireContext";

const PreTaskQuestionnaire = () => {
  const [unanswered, setUnanswered] = useState(false);

  const { setPage } = useContext(PageContext);
  const { preTaskForm } = useContext(PreTaskQuestionnaireContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const unansweredResult = Object.values(preTaskForm).includes(null);

    setUnanswered(unansweredResult);
    if (unansweredResult === true) {
      window.scrollTo(0, 0);
    } else {
      setPage(3);
    }
  };

  return (
    <>
      <Container style={{ paddingBottom: "80px" }}>
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
          <Button
            variant="primary"
            size="lg"
            type="submit"
            style={{
              position: "absolute",
              right: "150px",
            }}
          >
            Continue
          </Button>
        </form>
      </Container>
    </>
  );
};

export default PreTaskQuestionnaire;
