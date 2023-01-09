// import react components
import { useContext } from "react";

// import context
import PostTaskQuestionnaireContext from "../../context/PostTaskQuestionnaireContext";

// import react-likert-scale component
import Likert from "react-likert-scale";

const TrustQuestions = () => {
  const { postTaskForm, setPostTaskForm } = useContext(
    PostTaskQuestionnaireContext
  );

  const handleChange = (event) => {
    setPostTaskForm({
      ...postTaskForm,
      [event.id]: event.val.value,
    });
  };

  const responses = [
    { value: 1, text: "Disagree strongly" },
    { value: 2, text: "Disagree somewhat" },
    { value: 3, text: "I'm neutral about it " },
    { value: 4, text: "Agree somewhat" },
    { value: 5, text: "Agree strongly" },
  ];
  const trust1 = {
    question: "1. I am confident in the AI system. I feel that it works well.",
    responses: responses,
    // className: { likertScaleRadio },
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust1", val: val });
    },
  };

  const trust2 = {
    question: "2. The outputs of the AI system are very predictable.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust2", val: val });
    },
  };

  const trust3 = {
    question:
      "3.	The tool is very reliable. I can count on it to be correct all the time.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust3", val: val });
    },
  };

  const trust4 = {
    question:
      "4.	I feel safe that when I rely on the AI system, I will get the right answers.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust4", val: val });
    },
  };

  const trust5 = {
    question: "5.	The AI system is efficient in that it works very quickly.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust5", val: val });
    },
  };

  const trust6 = {
    question: "6.	I am wary of the AI system.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust6", val: val });
    },
  };

  const trust7 = {
    question:
      "7.	The AI system can perform the task better than a novice human user.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust7", val: val });
    },
  };

  const trust8 = {
    question: "8.	I like using the system for decision making.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "trust8", val: val });
    },
  };

  return (
    <>
      <Likert {...trust1} />
      <Likert {...trust2} />
      <Likert {...trust3} />
      <Likert {...trust4} />
      <Likert {...trust5} />
      <Likert {...trust6} />
      <Likert {...trust7} />
      <Likert {...trust8} />
    </>
  );
};

export default TrustQuestions;
