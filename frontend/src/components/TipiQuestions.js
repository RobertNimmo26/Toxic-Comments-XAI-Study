// import react components
import { useContext } from "react";

// import context
import PreTaskQuestionnaireContext from "../context/PreTaskQuestionnaireContext";

// import react-likert-scale component
import Likert from "react-likert-scale";

const TipiQuestions = () => {
  const { preTaskForm, setPreTaskForm } = useContext(
    PreTaskQuestionnaireContext
  );

  const handleChange = (event) => {
    setPreTaskForm({
      ...preTaskForm,
      [event.id]: event.val.value,
    });
  };

  const responses = [
    { value: 1, text: "Disagree strongly" },
    { value: 2, text: "Disagree moderately" },
    { value: 3, text: "Disagree a little" },
    { value: 4, text: "Neither agree nor disagree" },
    { value: 5, text: "Agree a little" },
    { value: 6, text: "Agree moderately" },
    { value: 7, text: "Agree strongly" },
  ];
  const tipi1 = {
    question: "1. I see myself as extraverted and enthusiastic.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi1", val: val });
    },
  };

  const tipi2 = {
    question: "2. I see myself as critical and quarrelsome.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi2", val: val });
    },
  };

  const tipi3 = {
    question: "3. I see myself as dependable and self-disciplined.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi3", val: val });
    },
  };

  const tipi4 = {
    question: "4. I see myself as anxious and easily upset.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi4", val: val });
    },
  };

  const tipi5 = {
    question: "5. I see myself as open to new experiences and complex.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi5", val: val });
    },
  };

  const tipi6 = {
    question: "6. I see myself as reserved and quiet.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi6", val: val });
    },
  };

  const tipi7 = {
    question: "7. I see myself as sympathetic and warm.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi7", val: val });
    },
  };

  const tipi8 = {
    question: "8. I see myself as disorganised and careless.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi8", val: val });
    },
  };

  const tipi9 = {
    question: "9. I see myself as calm and emotionally stable.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi9", val: val });
    },
  };

  const tipi10 = {
    question: "10. I see myself as conventional and uncreative.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "tipi10", val: val });
    },
  };

  return (
    <>
      <Likert {...tipi1} />
      <Likert {...tipi2} />
      <Likert {...tipi3} />
      <Likert {...tipi4} />
      <Likert {...tipi5} />
      <Likert {...tipi6} />
      <Likert {...tipi7} />
      <Likert {...tipi8} />
      <Likert {...tipi9} />
      <Likert {...tipi10} />
    </>
  );
};

export default TipiQuestions;
