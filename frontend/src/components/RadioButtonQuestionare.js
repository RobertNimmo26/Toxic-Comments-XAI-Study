// import react components
import { useContext } from "react";

// import bootstrap components
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Image from "react-bootstrap/Image";

const RadioButtonQuestionare = ({ questionData, questionContext }) => {
  const { postTaskForm, setPostTaskForm } = useContext(questionContext);

  const handleChange = (event) => {
    console.log(event.target);
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
          <FormCheck style={{ marginLeft: "20px", marginBottom: "5px" }}>
            <FormCheck.Input
              type="radio"
              value={question.value}
              onChange={handleChange}
              name={questionData.id}
            />
            <FormCheck.Label>{question.text}</FormCheck.Label>
            {question.image && (
              <Image
                src={question.image}
                style={{
                  width: "20%",
                }}
              />
            )}
          </FormCheck>
        ))}
      </Form.Group>
      <br />
    </>
  );
};

export default RadioButtonQuestionare;
