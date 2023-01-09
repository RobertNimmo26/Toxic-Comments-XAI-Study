// import react components
import { useContext } from "react";

// import context
import PostTaskQuestionnaireContext from "../../context/PostTaskQuestionnaireContext";

// import react-likert-scale component
import Likert from "react-likert-scale";

const PerceivedUnderstanding = () => {
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
    { value: 1, text: "1 (Fully don't understand)" },
    { value: 2, text: "2" },
    { value: 3, text: "3" },
    { value: 4, text: "4" },
    { value: 5, text: "5 (Fully understand)" },
  ];
  const perceivedunderstanding = {
    question:
      "9. On a scale of 1-5, how much do you feel you understand how the AI system is making decision after completing main study task? (1 suggests you fully don't understand how decisions have been made and 5 suggest you fully understand how decisions have been made)",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "perceivedunderstanding", val: val });
    },
  };

  return (
    <>
      <Likert {...perceivedunderstanding} />
    </>
  );
};

export default PerceivedUnderstanding;
