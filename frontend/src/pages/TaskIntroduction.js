// import react components
import { useContext, useState } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

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

  const [continueButton, setContinueButton] = useState(true);

  const handleChange = (event) => {
    setContinueButton(!continueButton);
  };

  return (
    <>
      <Container style={{ paddingBottom: "80px" }}>
        <TitleNav pageTitle={"Task Introduction"} />
        <Row>
          <h5>Scenario:</h5>
          <p>
            You are currently working for a social media platform like Reddit.
            The company has just deployed a new AI system which automatically
            flags a comment as "Toxic" or "Non-toxic".
          </p>
          <br />
          <h5>Task:</h5>
          <p>
            You have been asked to review the flagged comments and to check if
            the AI system is classifying each comment correctly. Each comment
            includes the result of the prediction made by the AI system and an
            explanation explaining why the AI system decided on the final
            prediction result.
          </p>
          <p>
            The AI system generates an explanations by returning the top-10 most
            important words which had the biggest effect on the AI systems final
            decision for each comment. Each top-10 word includes the label
            ("Toxic" or "Non-toxic") which the word effected the most in the AI
            system and the word importance score which represents how important
            the word was to the final prediction. A higher word importance score
            indicates a word is more important to final prediction in the AI
            system which indicates whether a comment is "Toxic" or "Non-toxic".
          </p>
          <p>
            <h6>You task is to:</h6>
            <ol>
              <li>
                Check that each comment has been labelled ("Toxic" or
                "Non-toxic") correctly by the AI system.
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If the comment has not been labelled correctly, change the
                  comment label.
                </li>
              </ul>
              <li>
                Check if the top-10 most important words for each comment
                requires any adjustments. These adjustments may include:
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If an important word has the wrong label associated with it,
                  change the word's label.
                </li>
                <li>
                  If a word importance score for an important word is too high
                  or too low, change the score to a more appropriate value.
                </li>
              </ul>
              <li>
                Check if there are any words in the comment which you believe
                are important to the final prediction but haven't been flagged
                in the top-10 most important words.
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If there are any additional words, add them and follow the
                  adjustments in the previous bullet points.
                </li>
              </ul>
            </ol>
          </p>
          <h6>What is a toxic word:</h6>
          <p>
            While completing this study, please base your definition of a toxic
            comments as a comment which is rude, disrespectful or otherwise
            likely to make someone leave a discussion.
          </p>
        </Row>
        <br />
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
            <i>
              <strong>Please note: </strong>You can reopen the task-interface
              diagram above anytime while completing the task by pressing the
              key <strong>I</strong> on your keyboard.
            </i>
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
                    <strong>(1)</strong>.
                    <br />
                    <br />
                    The list displays the comment number, the first five words
                    of the comment, the comments checked status and the
                    predicted label of the comment.
                    <br />
                    <br />
                    By default when you start the task, the first comment in the
                    list will be selected.
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
                    will include:
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        The full comment <strong>(2)</strong>.
                      </li>
                      <li>
                        A barchart displaying the top-10 most important words
                        used in the prediction <strong>(3)</strong>.
                      </li>
                      <li>
                        A button to allow you to add a new important word to the
                        explanation which you feel is important to the
                        prediction <strong>(4)</strong>.
                      </li>
                      <li>
                        The current time left to complete the task (this is only
                        used for the main task) <strong>(7)</strong>.
                      </li>
                      <li>
                        The overall prediction label for the comment{" "}
                        <strong>(8)</strong>.
                      </li>
                      <li>
                        A dropdown box which you can use to change the
                        prediction label <strong>(9)</strong>.
                      </li>
                      <li>
                        A list of the top-10 most important words to the
                        prediction <strong>(10)</strong> (the same words
                        displayed in the barchart). The important word list
                        provides the ability to change:
                        <ul style={{ listStyleType: "circle" }}>
                          <li>The label associated for each important word.</li>
                          <li>The words importance score.</li>
                        </ul>
                      </li>
                    </ul>
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
                  You can make as many changes as you feel are necessary. If you
                  feel the AI system is completely wrong thats completely fine.
                  <br />
                  <br />
                  <strong>
                    Here is an example of some of the changes you may want to
                    make:
                  </strong>
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
                    If you think the comment should be labelled as "Non-toxic"
                    and not "Toxic", use the dropdown box <strong>(9)</strong>{" "}
                    to change the comment label to "Non-toxic".
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
                    If you think the important word "ipsum" has been associated
                    with the wrong label and should had been labelled
                    "Non-toxic", change the dropdown box <strong>(10)</strong>{" "}
                    to "Non-toxic".
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
                    If you believe the important word "tempor" should have been
                    less important to the final decision in the AI system, move
                    the slider <strong>(10)</strong> to a lower importance.
                    <br />
                    <br />
                    If you drag the slider to 0%, this will suggest the word is
                    not an important word to the final prediction. If you move
                    the slider to 100%, this would suggest you belive it's a
                    really important word to the final prediction.
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
                    prediction (maybe because they have "Toxic" or "Non-toxic"
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
                    important word dropdown box, next select "Toxic" in the
                    label dropdown box and lastly change the slider to the
                    corresponding word importance for the new word.
                    <br />
                    <br />
                    You can add as many new important words which are not
                    already highlighted in the comment. If you change your mind,
                    press the "X" on the right-hand side of each new important
                    word.
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
          <h5>Summary of task:</h5>
          <p>
            <h6>For each comment you check:</h6>
            <ol>
              <li>Read the comment</li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If your agree with the comment label and happy with the
                  explanation, press "Checked comment" button.
                </li>
                <li>If you don't agree, continue checking comment.</li>
              </ul>
              <li>
                Check that the comment has been labelled ("Toxic" or
                "Non-toxic") correctly by the AI system.
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If the comment has not been labelled correctly, change the
                  comment label.
                </li>
              </ul>
              <li>
                Check if the top-10 most important words for the comment
                requires any adjustments. These adjustments may include:
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If an important word has the wrong label associated with it,
                  change the word's label.
                </li>
                <li>
                  If a word importance score for an important word is too high
                  or too low, change the score to a more appropriate value.
                </li>
              </ul>
              <li>
                Check if there are any words in the comment which you believe
                are important to the final prediction but haven't been flagged
                in the top-10 most important words.
              </li>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  If there are any additional words, add them and follow the
                  adjustments in the previous bullet points.
                </li>
              </ul>
            </ol>
          </p>
          <h5>Next steps:</h5>
          <p>
            You will be initially asked to complete a practice task. This will
            be used as an attention check and allows yourself to get used to
            using the task interface.
          </p>
          <p>
            After completing the practice task, you will be asked to complete
            the main study task. You will be given 20 minutes to complete the
            task. Afterwhich, you will be taken to the last stage of the study
            to complete the post-task questionnaire.
            <br />
            <br />
            You are not expected to check every comment, instead try to check as
            many as possible in the given time. We would prefer that you
            properly think through each comment instead of checking all of the
            comments. If we identify low effort has been put in completing this
            task, we will reject the submission.
          </p>
        </Row>
        <Row>
          <h5>Please be aware:</h5>
          <p>
            Please <strong>do not</strong> refresh your browser while completing
            the study and until you get redirected back to Prolific. If you do
            refresh your browser, data collected will be lost and you will be
            taken back to the start of the study.
          </p>
        </Row>
        <hr />

        <br />
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="confirm1">
                <Form.Check
                  type="checkbox"
                  label="I confirm that I have read and understood the task instructions."
                  onChange={handleChange}
                  name="confirm1"
                  style={{ marginTop: "5px" }}
                />
                <Form.Text className="text-muted">
                  <i>
                    <strong>Remember</strong> if you need to reopen the
                    task-interface diagram or remind yourself how to complete
                    the task while completing the task, press key{" "}
                    <strong>I</strong> on your keyboard.
                  </i>
                </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Button
                variant="primary"
                size="lg"
                disabled={continueButton}
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
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default TaskIntroduction;
