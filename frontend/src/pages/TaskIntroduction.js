// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// import context
import PageContext from "../context/PageContext";

// import task_interface image
import TaskInterfaceImage from "../assets/images/task_interface.png";

const TaskIntroduction = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Container style={{ paddingBottom: "80px" }}>
        <TitleNav pageTitle={"Task Introduction"} />
        <Row>
          <h5>Scenario:</h5>
          <p>
            You currently are working for a social media platform like Reddit.
            The company has just deployed a new AI system which automatically
            flags a comment as "Toxic" or "Non-toxic".
          </p>
          <br />
          <h5>Task:</h5>
          <p>
            You have been asked to review the flagged comments to check if the
            AI system is correctly classifying each comment. Each comment has an
            explanation of the prediction alongside the prediction which can be
            used to help you understand why a comment has been flagged as
            "Toxic" or "Non-toxic".
          </p>
          <p>
            You should check that each comment has been labelled correctly and
            if the comment has not been labelled correctly suggest which label
            it should have been given instead. In addition, for each of the
            flagged words in the explanation which have been marked important to
            the prediction, you should be able to change the label associated
            with the word ("Toxic" or "Non-toxic") and how important the word is
            for the prediction. Once you have completed checking the comment
            press "Checked comment". If you would like to reset all the changes
            which you have made for the currently selected comment, press "Reset
            comment".
          </p>
        </Row>
        <Row>
          <h5>Task interface:</h5>
          <Image
            src={TaskInterfaceImage}
            fluid
            alt="Task interface"
            style={{
              marginBottom: "50px",
              width: "90%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Row>
        <Row>
          <h5>Next steps:</h5>
          <p>
            You will be initially asked to complete a practice task. This will
            being used as an attention check and allows yourself to get used to
            using the task interface.
          </p>
          <p>
            After completing the practice task, you will be asked to complete
            the main study task. You will be given 20 minutes to complete the
            task. You are not expected to check every comment, instead try to
            check as many as possible in the given time. We would prefer that
            your actively suggest how the prediction/explanation should be
            improved. If low effort has been put in completing this task, we
            will reject the submission.
          </p>
        </Row>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setPage(4);
          }}
          style={{
            position: "absolute",
            right: "150px",
          }}
        >
          Continue
        </Button>
      </Container>
    </>
  );
};

export default TaskIntroduction;
