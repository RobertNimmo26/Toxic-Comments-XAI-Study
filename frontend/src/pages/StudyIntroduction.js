// import react components
import { useContext, useState, useEffect } from "react";

// import components
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import context
import PageContext from "../context/PageContext";

const StudyIntroduction = () => {
  const { setPage } = useContext(PageContext);

  const [continueButton, setContinueButton] = useState(true);
  const [confirmedQuestionAnswers, setConfirmedQuestionAnswers] = useState({
    confirm1: false,
    confirm2: false,
    confirm3: false,
    confirm4: false,
    confirm5: false,
  });

  const handleChange = (event) => {
    setConfirmedQuestionAnswers({
      ...confirmedQuestionAnswers,
      [event.target.id]: !confirmedQuestionAnswers[event.target.id],
    });
  };

  useEffect(() => {
    setContinueButton(Object.values(confirmedQuestionAnswers).includes(false));
  }, [confirmedQuestionAnswers]);

  const redirectProlific = () => {
    if (process.env.REACT_APP_ENVIRONMENT === "Dev") {
      // During dev redirect to Google
      window.location.replace("https://google.com");
    } else {
      // During testing/production redirect to Prolific
      window.location.replace(process.env.REACT_APP_PROLIFIC_REDIRECT_CONSENT);
    }
  };

  return (
    <>
      <Container style={{ paddingBottom: "80px" }}>
        <TitleNav pageTitle={"Study Introduction"} />
        <Row
          style={{
            flexDirection: "column",

            display: "flex",
            textAlign: "center",
            alignItems: "center" /* Vertical center alignment */,
            justifyContent: "center" /* Horizontal center alignment */,
          }}
        >
          <br />
          <h3>Influence of personality on explanations' acceptance project</h3>
          <br />
          <h5>Principal Investigator:</h5>
          <p>Robert Nimmo</p>
          <p>MSci Student Computing Science</p>
          <a href="mailto:Robert.Nimmo@glasgow.ac.uk">
            Robert.Nimmo@glasgow.ac.uk
          </a>
          <br />

          <h5>Supervisor:</h5>
          <p>Dr Simone Stumpf</p>
          <p>Reader in Responsible and Interactive AI</p>
          <a href="mailto:Simone.Stumpf@glasgow.ac.uk">
            Simone.Stumpf@glasgow.ac.uk
          </a>
          <br />

          <strong>
            You are being invited to take part in a research study. Before you
            decide to take part, it is important for you to understand why the
            research is being done and what it will involve. Please read the
            following information carefully.
          </strong>
        </Row>
        <br />
        <Row>
          <h5>What is the purpose of the study?</h5>
          <p>
            This study will investigate the influence the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Big_Five_personality_traits"
              target="_blank"
            >
              Big 5 personality traits
            </a>{" "}
            can have on explainable Artifical Intelligence (AI) systems. An
            explanation explaining why a decision was made will be generated for
            each comment. You will be able to give feedback about whether you
            think a decision is correct or incorrect and provide suggested
            feedback on how the AI system could make better decisions in the
            future.
          </p>
          <h5>What will happen if I take part?</h5>
          <p>
            You will first be asked to complete a pre-task questionnaire which
            will be used to identify your personality traits and your previous
            experience with AI systems. Afterwards you will receive a brief
            introduction to our prototype and will be asked to complete a
            practice task. You then have 20 minutes to complete the assigned
            task using the prototype. We will record the feedback you give for
            each comment you check and some simple analytics, such as which
            buttons you press, to investigate how you used the prototype. This
            study will not last longer than 30 minutes.
          </p>
          <h5>Do I have to take part?</h5>
          <p>
            Participation in the project is voluntary. You can stop and withdraw
            your data during any stage of completing the study, including after
            completing study.
          </p>
          <h5>
            Are there any device requirements to participate in this study?
          </h5>
          <p>
            Yes, you <ins>must</ins> be using a laptop/desktop computer with an
            up-to-date modern browser such as Chrome, Edge, Safari or Firefox.
            You <ins>cannot</ins> use a mobile phone or tablet (including iPads)
            to participate in this study. Please also keep your browser window
            in full screen for the full length of the study.
          </p>
          <h5>Will my taking part in the study be kept confidential?</h5>
          <p>
            All data will be anonymous. We will only use the Prolific ID
            allocated to you.
          </p>
          <h5>What will happen to the results?</h5>
          <p>
            The results of the study will be included in reports and
            publications. We are intending to make the data public after the end
            of our study to help other researchers develop better explanations
            in AI systems.
          </p>
          <h5>What are the possible disadvantages and risks of taking part?</h5>
          <p>
            You will be exposed to toxic language while completing the study
            which may make you feel uncomfortable.
          </p>
          <h5>What are the possible benefits of taking part?</h5>
          <p>
            By taking part in the study, you will contribute to help us identify
            how personality can affect explanations in AI systems, which could
            lead to greater tailored explanations in the future.
          </p>
          <h5>How is the project being funded?</h5>
          <p>
            The project is a collaboration between Nokia Bell Labs and
            University of Glasgow.
          </p>
          <h5> Will I be paid to participate in this study?</h5>
          <p>
            Yes, you will be paid £4.50 for completing our study fully.
            Participants who do not actively participate in the study will not
            be paid. We will measure participants participation through implicit
            attention checks and checking how actively you check each comment
            which is presented to you during the task.
          </p>
        </Row>
        <br />

        <Row>
          <p>
            This project has been considered and approved by the CoSE Research
            Ethics Committee.
          </p>
          <p>
            To pursue any complaint about the conduct of the research: contact
            the College of Science and Engineering Lead for Ethical Review, Dr
            Julie Williamson,{" "}
            <a href="mailto:Julie.Williamson@glasgow.ac.uk">
              Julie.Williamson@glasgow.ac.uk
            </a>
            .
          </p>
          <p>
            If you wish to find out more about the study, please contact the
            Principal Investigator Robert Nimmo,{" "}
            <a href="mailto:Robert.Nimmo@glasgow.ac.uk">
              Robert.Nimmo@glasgow.ac.uk
            </a>
            .
          </p>
          <b>Thank you for reading this.</b>
        </Row>
        <br />

        <Row>
          <h6>
            Please answer the questions below using the checkboxes. Once
            completed press "Agree to continue with study" to start the research
            study. If you do not agree with any of the questions below and do
            not wish to continue to participate with this study, please press
            "Do not wish to continue with study". You will be redirected back to
            Prolific.
          </h6>
          <br />

          <Form>
            <Form.Group controlId="confirm1">
              <Form.Check
                type="checkbox"
                label="I confirm that I have read and understood the Participant
                    Information for the above study."
                onChange={handleChange}
                name="confirm1"
                style={{ marginTop: "5px" }}
              />
            </Form.Group>
            <Form.Group controlId="confirm2">
              <Form.Check
                type="checkbox"
                label="I understand that I will be exposed to toxic language while completing the study."
                onChange={handleChange}
                name="confirm2"
                style={{ marginTop: "5px" }}
              />
            </Form.Group>
            <Form.Group controlId="confirm3">
              <Form.Check
                type="checkbox"
                label="I understand that the data may be used in future
                    publications, both print and online."
                onChange={handleChange}
                name="confirm3"
                style={{ marginTop: "5px" }}
              />
            </Form.Group>
            <Form.Group controlId="confirm4">
              <Form.Check
                type="checkbox"
                label="I understand that the data may be made available to other researchers. I waive my copyright to any data collected as part of this project."
                onChange={handleChange}
                name="confirm4"
                style={{ marginTop: "5px" }}
              />
            </Form.Group>
            <Form.Group controlId="confirm5">
              <Form.Check
                type="checkbox"
                label="I agree to take part in this research study."
                onChange={handleChange}
                name="confirm5"
                style={{ marginTop: "5px" }}
              />
            </Form.Group>
            <br />
            <Col>
              <Button
                variant="warning"
                size="lg"
                onClick={() => {
                  redirectProlific();
                }}
                style={{
                  position: "absolute",
                  left: "150px",
                }}
              >
                Do not wish to continue with study
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                size="lg"
                disabled={continueButton}
                onClick={() => {
                  setPage(2);
                }}
                style={{
                  position: "absolute",
                  right: "150px",
                }}
              >
                Agree to continue with study
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default StudyIntroduction;
