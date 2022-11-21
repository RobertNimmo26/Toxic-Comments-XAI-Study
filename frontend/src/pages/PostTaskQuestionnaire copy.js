// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// import context
import PageContext from "../context/PageContext";

const PostTaskQuestionnaire = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Container>
        <TitleNav pageTitle={"Post-task Questionnaire"} />
        <p>Questions from questionnaire (post-task)</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setPage(1);
          }}
        >
          Continue
        </Button>
      </Container>
    </>
  );
};

export default PostTaskQuestionnaire;
