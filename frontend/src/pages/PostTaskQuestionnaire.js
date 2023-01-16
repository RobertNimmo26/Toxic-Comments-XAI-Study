// import react components
import { useContext, useState } from "react";

// import components
import TitleNav from "../components/TitleNav";
import TrustQuestions from "../components/post_task_questions/TrustQuestions";
import PerceivedUnderstanding from "../components/post_task_questions/PerceivedUnderstanding";
import ActualUnderstanding from "../components/post_task_questions/ActualUnderstanding";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// import context
import PageContext from "../context/PageContext";
import PostTaskQuestionnaireContext from "../context/PostTaskQuestionnaireContext";

const PostTaskQuestionnaire = () => {
  const [unanswered, setUnanswered] = useState(false);

  const { setPage } = useContext(PageContext);
  const { postTaskForm } = useContext(PostTaskQuestionnaireContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const unansweredResult = Object.values(postTaskForm).includes(null);

    setUnanswered(unansweredResult);
    if (unansweredResult === true) {
      window.scrollTo(0, 0);
    } else {
      setPage(7);
    }
  };

  return (
    <>
      <Container style={{ paddingBottom: "80px" }}>
        <TitleNav pageTitle={"Post-task Questionnaire"} />

        {unanswered === true && (
          <Alert key="danger" variant="danger">
            Please answer all questions.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TrustQuestions />
          <PerceivedUnderstanding />
          <ActualUnderstanding />

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

export default PostTaskQuestionnaire;
