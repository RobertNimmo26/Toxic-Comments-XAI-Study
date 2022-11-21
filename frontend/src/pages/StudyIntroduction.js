// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// import context
import PageContext from "../context/PageContext";

const StudyIntroduction = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Container>
        <TitleNav pageTitle={"Study Introduction"} />
        <p>Hello, welcome to the study</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setPage(2);
          }}
        >
          Agree to continue with study
        </Button>
      </Container>
    </>
  );
};

export default StudyIntroduction;
