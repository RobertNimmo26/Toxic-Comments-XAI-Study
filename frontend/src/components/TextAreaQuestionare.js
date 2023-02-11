// import react components
import { useContext } from "react";

// import bootstrap components
import Form from "react-bootstrap/Form";
import TextareaCounter from "react-textarea-counter";

const TextAreaQuestionare = ({ questionData, questionContext }) => {
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
        <TextareaCounter
          countLimit={1000}
          onChange={handleChange}
          required={true}
          rows={4}
          class="form-control"
          id={questionData.id}
        />
      </Form.Group>
      <br />
    </>
  );
};

export default TextAreaQuestionare;
