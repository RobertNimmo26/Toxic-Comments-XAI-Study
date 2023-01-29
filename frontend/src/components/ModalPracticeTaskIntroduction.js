// import react components
import { useState, useEffect } from "react";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalPracticeTaskIntroduction = () => {
  const [show, setShow] = useState(true);

  // reopen modal if "B" is pressed on the keyboard
  useEffect(() => {
    const handler = (event) => {
      if (event.keyCode === 66) {
        setShow(true);
      }
    };

    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler, false);
  }, []);

  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Practice task instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Brief:</h5>
          You believe the word "political" should have been labelled "Toxic".
          <br />
          <br />
          <h5>Task:</h5>
          First, change the word label to "Toxic" and then afterwards change the
          word importance slider to 50% for the word "political".
          <br />
          <br />
          Once you have completed this task press the button "Checked comment".
          If you are required to reset your changes, press "Reset comment".
          <br />
          <br />
          If you require to reopen this instructions brief press{" "}
          <strong>B</strong> on your keyboard.
          <br />
          <br />
          <b>This is an attention check.</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPracticeTaskIntroduction;
