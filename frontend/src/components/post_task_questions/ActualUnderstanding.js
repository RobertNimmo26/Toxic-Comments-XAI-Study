// import context
import PostTaskQuestionnaireContext from "../../context/PostTaskQuestionnaireContext";

// import components
import RadioButtonQuestionare from "../RadioButtonQuestionare";

// import bootstrap components
import Image from "react-bootstrap/Image";

// import images
import CommentImage from "../../assets/images/post_task_questionnaire_comment.png";
import FigureImage from "../../assets/images/post_task_questionnaire_figure.png";
import Slider0 from "../../assets/images/slider_0.png";
import Slider25 from "../../assets/images/slider_25.png";
import Slider75 from "../../assets/images/slider_75.png";
import Slider100 from "../../assets/images/slider_100.png";

const ActualUnderstanding = () => {
  const actualunderstanding1 = {
    question:
      "10. What is the difference in meaning between the blue and red in the figure?",
    id: "actualunderstanding1",
    responses: [
      { value: "a", text: "a.	Blue: Toxic, Red: Non-toxic" },
      { value: "b", text: "b.	Blue: Non-toxic, Red: Toxic" },
    ],
  };

  const actualunderstanding2 = {
    question: "11. Which word is the least important? ",
    id: "actualunderstanding2",
    responses: [
      { value: "a", text: "a.	Moron" },
      { value: "b", text: "b.	Shut" },
      { value: "c", text: "c.	better" },
      { value: "d", text: "d.	up" },
      { value: "e", text: "e.	AND" },
      { value: "f", text: "f.	even" },
      { value: "g", text: "g.	voted" },
      { value: "h", text: "h	rated" },
      { value: "i", text: "i.	Halo" },
      { value: "j", text: "j.	then" },
    ],
  };

  const actualunderstanding3 = {
    question: `12. Which position will the word importance slider for the word "Moron" be initially at with no feedback changes?`,
    id: "actualunderstanding3",
    responses: [
      { value: "a", text: "a.", image: Slider0 },
      { value: "b", text: "b.", image: Slider25 },
      { value: "c", text: "c.", image: Slider75 },
      { value: "d", text: "d.", image: Slider100 },
    ],
  };

  const actualunderstanding4 = {
    question: `13. Which label will the word "voted" be initially with no feedback changes?`,
    id: "actualunderstanding4",
    responses: [
      { value: "a", text: "a.	Toxic" },
      { value: "b", text: "b.	Non-toxic" },
    ],
  };

  const actualunderstanding5 = {
    question: `14. You believe "Shut" has been marked as too important and you feel it shouldn't be part of the AI systems explanation, what position will you move the slider too?`,
    id: "actualunderstanding5",
    responses: [
      { value: "a", text: "a.", image: Slider0 },
      { value: "b", text: "b.", image: Slider25 },
      { value: "c", text: "c.", image: Slider75 },
      { value: "d", text: "d.", image: Slider100 },
    ],
  };

  return (
    <>
      <h5>
        For question (10-14), use the details bellow to answer the questions.
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
    </>
  );
};

export default ActualUnderstanding;
