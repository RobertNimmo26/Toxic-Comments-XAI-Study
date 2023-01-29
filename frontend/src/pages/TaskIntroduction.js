// import react components
import { useContext } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import context
import PageContext from "../context/PageContext";

// import task_interface image
import TaskInterfaceImage from "../assets/images/task_interface.png";

// import task images
import TaskSideBar from "../assets/images/task_images/sidebar_scroll.png";
import TaskDashboard from "../assets/images/task_images/task_dashboard.png";
import CommentLabel from "../assets/images/task_images/comment_label.png";
import IpsumLabel from "../assets/images/task_images/ipsum_label.png";
import TemporSlider from "../assets/images/task_images/tempor_slider.png";
import NewIW from "../assets/images/task_images/new_IW.png";
import NewIWWord from "../assets/images/task_images/new_IW_word.png";
import NewIWLabel from "../assets/images/task_images/new_IW_label.png";
import NewIWSlider from "../assets/images/task_images/new_IW_slider.png";
import ResetCheckedComment from "../assets/images/task_images/reset_checked.png";

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
            top-10 words in the explanation which have been marked important to
            the prediction, you should be able to change the label associated
            with the word ("Toxic" or "Non-toxic") and how important the word is
            for the prediction. Lastly, if there are any words not included in
            the top-10 words which you feel are important to the prediction, you
            will be able to add them. Once you have completed checking the
            comment press "Checked comment". If you would like to reset all the
            changes which you have made for the currently selected comment,
            press "Reset comment".
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
          <p
            style={{
              textAlign: "center",
            }}
          >
            You can reopen the task-interface diagram above anytime while
            completing the task by pressing the key <strong>I</strong> on your
            keyboard.
          </p>
          <br />
          <br />
          <h5>Steps on using task interface:</h5>
          <div>
            <ol>
              <hr />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li>
                    You will first require to select a comment from the
                    scrollable list on the left hand side of the screen{" "}
                    <strong>(1)</strong>. The list displays the comment number,
                    the first five words of the comment, the comments checked
                    status and the predicted label of the comment. By default
                    when you start the task, the first comment in the list will
                    be selected.
                  </li>
                </Col>
                <Col md={7}>
                  <Image
                    src={TaskSideBar}
                    fluid
                    alt="Task sidebar"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "30%",
                    }}
                  />
                </Col>
              </Row>
              <hr />

              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li>
                    Once the comment has been selected you will be presented a
                    dashboard overview for the specific comment. This dashboard
                    will include the full comment <strong>(2)</strong>, a
                    barchart displaying the top-10 most important words to the
                    prediction <strong>(3)</strong>, a button to allow you to
                    suggest a new important word which you feel should be added
                    to the prediction explanation <strong>(4)</strong>, the
                    current time left to complete the task (this is only used
                    for the main study task) <strong>(7)</strong>, the overall
                    prediction label for the comment <strong>(8)</strong> and a
                    dropdown box which you can you to change the prediction
                    label <strong>(9)</strong>, and a list of the top-10 most
                    important words to the prediction <strong>(10)</strong> (the
                    same words displayed in the barchart) and the ability to
                    change the label associated to the word and the word
                    importance weight (a higher word weight indicates a word is
                    more important to final prediction in the AI system).
                  </li>
                </Col>
                <Col md={7}>
                  <Image
                    src={TaskDashboard}
                    fluid
                    alt="Comment dashboard"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "90%",
                    }}
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <li>
                  You should check if the comment prediction and explanation is
                  accurate. Make any changes to the preset values if you believe
                  they are not correct or haven't been represented well by the
                  AI system.
                  <br />
                  <br />
                  You can make as many changes are you feel are necessary. If
                  you feel the AI system is completely wrong thats completely
                </li>
              </Row>
              <br />
              <br />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    For example, if you think the comment should be labelled as
                    "Non-toxic" and not "Toxic", use the dropdown box{" "}
                    <strong>(9)</strong> to change the comment label to
                    "Non-toxic".
                  </p>
                </Col>
                <Col md={7}>
                  <Image
                    src={CommentLabel}
                    fluid
                    alt="Comment dashboard"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50%",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <hr
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <br />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    If you think, for example, the important word "ipsum" has
                    been associated with the wrong label and should had been
                    labelled "Non-toxic", change the dropdown box{" "}
                    <strong>(10)</strong> to "Non-toxic".
                  </p>
                </Col>
                <Col md={7}>
                  <Image
                    src={IpsumLabel}
                    fluid
                    alt="Changing important word label"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <hr
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <br />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    If you believe, for example, the important word "tempor"
                    should have been less important to the final decision in the
                    AI system, move the slider <strong>(10)</strong> to a lower
                    importance. If you drag the slider to 0%, this will suggest
                    the word should not be an important word to the prediction.
                    If you move the slider to 100%, this would suggest you
                    belive it's a really important word to the final prediction.
                  </p>
                </Col>
                <Col md={7}>
                  <Image
                    src={TemporSlider}
                    fluid
                    alt="Changing important word importance slider"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <hr
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <br />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    If you feel that there are words that are not currently in
                    the top-10 most important words, but are important to the
                    prediction (maybe because they have Toxic or Non-toxic
                    connotation), then press "Add new word" <strong>(4)</strong>
                    . This will provide a similar interface to the top-10
                    important words <strong>(10)</strong>, with the addition you
                    can select any word that is not currently highlighted in the
                    comment.
                    <br />
                    <br />
                    For example, you believe the word "amet" is important to the
                    final prediction as it's a highly "Toxic" word. First press
                    "Add new word", then select the word "amet" from the
                    important word dropdown box, next select Toxic in the label
                    dropdown box and lastly change the slider to the
                    corresponding word importance for the comment.
                    <br />
                    <br />
                    You can add as many new important words which are not
                    already highlighted in the comment. If you change your mind,
                    press the "X" on the right-hand side of each new important
                    word. Only new important words which have been fully filled
                    in will be saved.
                  </p>
                </Col>
                <Col md={7}>
                  <Image
                    src={NewIW}
                    fluid
                    alt="Adding a new important word"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "60%",
                    }}
                  />
                  <br />
                  <Image
                    src={NewIWWord}
                    fluid
                    alt="Selecting a word for the new important word"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "60%",
                    }}
                  />
                  <br />
                  <Image
                    src={NewIWLabel}
                    fluid
                    alt="Selecting a label for the new important word"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "60%",
                    }}
                  />
                  <br />
                  <Image
                    src={NewIWSlider}
                    fluid
                    alt="Selecting the word importance for the new important word"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "60%",
                    }}
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col
                  md={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li>
                    Once your happy with all your changes, press the "Checked
                    comment" button <strong>(6)</strong>. This will
                    automatically take you to the next comment in the list,
                    however, you can still change the comment you would like to
                    review using the scrollable list <strong>(1)</strong>. Only
                    after you pressed "Checked comment" will any changes be
                    saved. This includes if you want to make additional changes
                    later to an already "Checked" comment.
                    <br />
                    <br />
                    If you make any mistake or just rather reset all your
                    changes you have made, press the "Reset comment" button{" "}
                    <strong>(5)</strong>. This will also change the status of
                    the comment to "Unchecked" if you have already checked the
                    comment.
                  </li>
                </Col>
                <Col md={7}>
                  <Image
                    src={ResetCheckedComment}
                    fluid
                    alt="Reset and check comment button"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "60%",
                      marginTop: "100px",
                    }}
                  />
                </Col>
              </Row>
              <hr />
            </ol>
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
          Continue to practice task
        </Button>
      </Container>
    </>
  );
};

export default TaskIntroduction;
