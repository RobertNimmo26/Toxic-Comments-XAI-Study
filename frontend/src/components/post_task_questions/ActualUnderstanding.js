// import context
import PostTaskQuestionnaireContext from "../../context/PostTaskQuestionnaireContext";

// import components
import RadioButtonQuestionare from "../RadioButtonQuestionare";

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
      { value: "a", text: "a.	word1" },
      { value: "b", text: "b.	word2" },
      { value: "c", text: "c.	word3" },
      { value: "d", text: "d.	word4" },
      { value: "e", text: "e.	word5" },
      { value: "f", text: "f.	word6" },
      { value: "g", text: "g.	word7" },
      { value: "h", text: "h	word8" },
      { value: "i", text: "i.	word9" },
      { value: "j", text: "j.	word10" },
    ],
  };

  const actualunderstanding3 = {
    question: `12. Which position will the word importance slider for the word "word2" be initially at with no feedback changes?`,
    id: "actualunderstanding3",
    responses: [
      { value: "a", text: "a.	(slider 0%)" },
      { value: "b", text: "b.	(slider 25%)" },
      { value: "c", text: "c.	(slider 50%)" },
      { value: "d", text: "d.	(slider 100%)" },
    ],
  };

  const actualunderstanding4 = {
    question: `12. Which label will the word "word2" be initially with no feedback changes?`,
    id: "actualunderstanding4",
    responses: [
      { value: "a", text: "a.	Toxic" },
      { value: "b", text: "b.	Non-toxic" },
    ],
  };

  const actualunderstanding5 = {
    question: `13. You believe "word3" which has been marked as too important and you feel it shouldn't be part of the AI systems, what position will you move the slider too?`,
    id: "actualunderstanding5",
    responses: [
      { value: "a", text: "a.	(slider 0%)" },
      { value: "b", text: "b.	(slider 25%)" },
      { value: "c", text: "c.	(slider 50%)" },
      { value: "d", text: "d.	(slider 100%)" },
    ],
  };

  return (
    <>
      <RadioButtonQuestionare
        questionData={actualunderstanding1}
        questionContext={PostTaskQuestionnaireContext}
      />
      <RadioButtonQuestionare
        questionData={actualunderstanding2}
        questionContext={PostTaskQuestionnaireContext}
      />
      <strong>add images of the slider here</strong>
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
