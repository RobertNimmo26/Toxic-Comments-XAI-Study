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
  const { setPage } = useContext(PageContext);

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
            AI system is classifying each comment correctly. Each comment has an
            explanation of the prediction alongside the prediction results
            itself which can be used to help you understand why a comment has
            been flagged as "Toxic" or "Non-toxic".
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
          <h6>Steps on using task interface:</h6>
          <div>
            <ol>
              <li>
                You will first require to select a comment from the scrollable
                list on the left hand side of the screen <strong>(1)</strong>.
                The list displays the comment number, the first five words of
                the comment, the comments checked status and the predicted label
                of the comment. By default when you start the task, the first
                comment in the list will be selected.
              </li>
              <br />
              <li>
                Once the comment has been selected you will be presented a
                dashboard overview for the specific comment. This dashboard will
                include the full comment <strong>(2)</strong>, a barchart
                displaying the top-10 most important words to the prediction{" "}
                <strong>(3)</strong>, the overall prediction label for the
                comment <strong>(7)</strong> and a dropdown box which you can
                you to change the prediction label <strong>(8)</strong>, and a
                list of the top-10 most important words to the prediction{" "}
                <strong>(9)</strong> (the same words displayed in the barchart)
                and the ability to change the label associated to the word and
                the word importance weight (a higher word weight indicates a
                word is more important to final prediction in the AI system).
              </li>
              <br />
              <li>
                You should check if the comment prediction and explanation is
                accurate. Make any changes to the default values if you believe
                they are not correct or haven't been represented well by the AI
                system.
                <br />
                <br />
                For example, if you think the comment should be labelled as
                "Non-toxic" and not "Toxic", use the dropdown box{" "}
                <strong>(8)</strong> to change the comment label to "Non-toxic".
                <br />
                <br />
                Another example is, if you think one of the important words has
                been associated with the wrong label (Toxic/Non-toxic) and
                should have been less important to the final decision in the AI
                system, first change the dropdown box <strong>(9)</strong> for
                the associated important word to the other label and change the
                slider <strong>(9)</strong> to a lower importance.
                <br />
                <br />
                You can make as many changes are you feel are necessary. If you
                feel the AI system is completely wrong thats completely fine.
              </li>
              <br />
              <li>
                Once your happy with all your changes, press the "Checked
                comment" button <strong>(5)</strong>. This will automatically
                take you to the next comment in the list, however, you can still
                change the comment you would like to review using the scrollable
                list <strong>(1)</strong>. Only after you pressed "Checked
                comment" will any changes be saved. This includes if you want to
                make additional changes later to an already "Checked" comment.
                <br />
                <br />
                If you make any mistake or just rather reset all your changes
                you have made, press the "Reset comment" button{" "}
                <strong>(4)</strong>. This will also change the status of the
                comment to "Unchecked" if you have already checked the comment.
              </li>
            </ol>
            <strong>
              You can reopen the task-interface diagram and the instructions
              above anytime while completing the task by pressing the key{" "}
              <i>"I"</i> on your keyboard.
            </strong>
          </div>
        </Row>
        <br />

        <Row>
          <h5>Next steps:</h5>
          <p>
            You will be initially asked to complete a practice task. This will
            be used as an attention check and allows yourself to get used to
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
        <Row>
          <h5>Please be aware:</h5>
          <p>
            Please do not refresh your browser while completing the study and
            until you get redirected back to Prolific. If you do refresh your
            browser, data collected will be lost and you will be taken back to
            the start of the study.
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
