// import react components
import { useContext } from "react";

// import bootstrap components
import Form from "react-bootstrap/Form";

const RadioButtonQuestionare = ({ questionData, questionContext }) => {
  const { postTaskForm, setPostTaskForm } = useContext(questionContext);

  const handleChange = (event) => {
    setPostTaskForm({
      ...postTaskForm,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <Form.Group controlId={questionData.id}>
        <Form.Label>{questionData.question}</Form.Label>
        {questionData.responses.map((question, _i) => (
          <Form.Check
            value={question.value}
            type="radio"
            label={question.text}
            onChange={handleChange}
            name={questionData.id}
            style={{ marginLeft: "20px", marginBottom: "5px" }}
          />
        ))}
      </Form.Group>
      <br />
    </>
  );
};

export default RadioButtonQuestionare;
