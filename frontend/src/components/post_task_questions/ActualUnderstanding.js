// import context
import PostTaskQuestionnaireContext from "../../context/PostTaskQuestionnaireContext";

// import components
import RadioButtonQuestionare from "../RadioButtonQuestionare";
import TextAreaQuestionare from "../TextAreaQuestionare";

// import bootstrap components
import Image from "react-bootstrap/Image";

// import images
import CommentImage from "../../assets/images/post_task_questionnaire_comment.png";
import FigureImage from "../../assets/images/post_task_questionnaire_figure.png";
import Slider0 from "../../assets/images/slider_0.png";
import Slider25 from "../../assets/images/slider_25.png";
import Slider75 from "../../assets/images/slider_75.png";
import Slider100 from "../../assets/images/slider_100.png";
import Diagram1 from "../../assets/images/post_task_questionnaire_diagram1.png";
import Diagram2 from "../../assets/images/post_task_questionnaire_diagram2.png";

const ActualUnderstanding = () => {
  const actualunderstanding1 = {
    question:
      "10. What is the difference in meaning between the blue and red in the figure?",
    id: "actualunderstanding1",
    responses: [
      { value: "a", text: "a.	I don't know" },
      { value: "b", text: "b.	Blue: Toxic, Red: Non-toxic" },
      { value: "c", text: "c.	Blue: Non-toxic, Red: Toxic" },
    ],
  };

  const actualunderstanding2 = {
    question:
      "11. Which word is the third least important word in the AI systems top-10 most important word explanation for the comment?",
    id: "actualunderstanding2",
    responses: [
      { value: "a", text: "a.	I don't know" },
      { value: "b", text: "b.	Moron" },
      { value: "c", text: "c.	Shut" },
      { value: "d", text: "d.	better" },
      { value: "e", text: "e.	up" },
      { value: "f", text: "f.	AND" },
      { value: "g", text: "g.	even" },
      { value: "h", text: "h.	voted" },
      { value: "i", text: "i.	rated" },
      { value: "j", text: "j.	Halo" },
      { value: "k", text: "k.	then" },
    ],
  };

  const actualunderstanding3 = {
    question: `12. Which position will the word importance score slider for the word "Moron" be initially at with no feedback changes?`,
    id: "actualunderstanding3",
    responses: [
      { value: "a", text: "a.	I don't know" },
      { value: "b", text: "b.", image: Slider0 },
      { value: "c", text: "c.", image: Slider25 },
      { value: "d", text: "d.", image: Slider75 },
      { value: "e", text: "e.", image: Slider100 },
    ],
  };

  const actualunderstanding4 = {
    question: `13. Which label will the word "voted" be initially with no feedback changes?`,
    id: "actualunderstanding4",
    responses: [
      { value: "a", text: "a.	I don't know" },
      { value: "b", text: "b.	Toxic" },
      { value: "c", text: "c.	Non-toxic" },
    ],
  };

  const actualunderstanding5 = {
    question: `14. You believe "Shut" has been marked as too important and you feel it shouldn't be part of the AI systems explanation, what position will you move the slider too?`,
    id: "actualunderstanding5",
    responses: [
      { value: "a", text: "a.	I don't know" },
      { value: "b", text: "b.", image: Slider0 },
      { value: "c", text: "c.", image: Slider25 },
      { value: "d", text: "d.", image: Slider75 },
      { value: "e", text: "e.", image: Slider100 },
    ],
  };

  const actualunderstanding6 = {
    question: `15. You believe the word "Half" is really important to the final prediction as it has Non-toxic connotations, but it hasn’t been included in the top-10 most important words for the comment. What would you do in this situation?`,
    id: "actualunderstanding6",
  };

  const actualunderstanding7 = {
    question: `16. What is the AI system making a prediction about?`,
    id: "actualunderstanding7",
    responses: [
      { value: "a", text: "a.	I don't know" },
      {
        value: "b",
        text: "b.	Predicting if the comment is Positive or Negative.",
      },
      {
        value: "c",
        text: "c.	Predicting which words are Toxic in the comment.",
      },
      {
        value: "d",
        text: "d. Predicting which words to remove from the comment.",
      },
      {
        value: "e",
        text: "e.	Predicting if the comment is Toxic or Non-toxic.",
      },
    ],
  };

  const actualunderstanding8 = {
    question: `17. If a comment is predicted to be Non-toxic with 51.21% confidence, what does this mean?`,
    id: "actualunderstanding8",
    responses: [
      { value: "a", text: "a.	I don't know" },
      {
        value: "b",
        text: "b.	The AI system has a high certainty that the comment is Non-toxic.",
      },
      {
        value: "c",
        text: "c.	The AI system has a high certainty that the comment is Toxic.",
      },
      {
        value: "d",
        text: "d.	The AI system has a low certainty that the comment is Non-toxic.",
      },
      {
        value: "e",
        text: "e.	The AI system has a low certainty that the comment is Toxic.",
      },
    ],
  };

  const actualunderstanding9 = {
    question: `18. If the AI system assigns a comment with a low confidence, what does this suggest?`,
    id: "actualunderstanding9",
    responses: [
      { value: "a", text: "a.	I don't know" },
      {
        value: "b",
        text: "b.	The AI system is confident with its decision and is less likely to have made a potential mistake.",
      },
      {
        value: "c",
        text: "c.	The AI system is less confident with its decision and is more likely to have made a potential mistake.",
      },
      {
        value: "d",
        text: "d.	The AI system is confident with its decision and is more likely to have made a potential mistake.",
      },
      {
        value: "e",
        text: "e.	The AI system is less confident with its decision and is less likely to have made a potential mistake.",
      },
    ],
  };

  const actualunderstanding10 = {
    question: `19. Based only on your experience of completing the previous task and the information which has been provided to you in the instructions, how does the AI system predict that a comment is Toxic or Non-toxic?`,
    id: "actualunderstanding10",
  };

  const actualunderstanding11 = {
    question: `20. Based on the top-10 most important words and the words importance score in Diagram 1 and Diagram 2, which comment is more likely to be labelled Non-toxic?`,
    id: "actualunderstanding11",
    responses: [
      { value: "a", text: "a.	I don't know" },
      {
        value: "b",
        text: "b.	Diagram 1",
      },
      {
        value: "c",
        text: "c.	Diagram 2",
      },
    ],
  };

  const actualunderstanding12 = {
    question: `21. Can you explain the justification for your answer to question 20? `,
    id: "actualunderstanding12",
  };

  return (
    <>
      <h5>
        For question (10-15), use the details below to answer the questions.
      </h5>
      <Image
        src={CommentImage}
        fluid
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          width: "45%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Image
        src={FigureImage}
        fluid
        style={{
          marginBottom: "30px",
          width: "45%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding1}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding2}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding3}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding4}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding5}
        questionContext={PostTaskQuestionnaireContext}
      />
      <TextAreaQuestionare
        questionData={actualunderstanding6}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding7}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding8}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding9}
        questionContext={PostTaskQuestionnaireContext}
      />
      <TextAreaQuestionare
        questionData={actualunderstanding10}
        questionContext={PostTaskQuestionnaireContext}
      />
      <h5>
        For question (20-21), use the details below to answer the questions.
      </h5>
      <figure>
        <Image
          src={Diagram1}
          fluid
          style={{
            marginTop: "30px",
            width: "45%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <figcaption style={{ textAlign: "center", marginBottom: "30px" }}>
          <i>Diagram 1</i>
        </figcaption>
      </figure>
      <figure>
        <Image
          src={Diagram2}
          fluid
          style={{
            marginTop: "30px",
            width: "45%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <figcaption style={{ textAlign: "center", marginBottom: "30px" }}>
          <i>Diagram 2</i>
        </figcaption>
      </figure>
      <RadioButtonQuestionare
        questionData={actualunderstanding11}
        questionContext={PostTaskQuestionnaireContext}
      />
      <TextAreaQuestionare
        questionData={actualunderstanding12}
        questionContext={PostTaskQuestionnaireContext}
      />
    </>
  );
};

export default ActualUnderstanding;
