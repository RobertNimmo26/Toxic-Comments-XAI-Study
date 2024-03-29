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
          You believe that the important word "political" should have been
          labelled "Toxic" rather than "Non-toxic" and should be more important
          for the final prediction.
          <br />
          <br />
          <h5>Task:</h5>
          <ol>
            <li>
              Change the word label to "Toxic" for the important word
              "political".
            </li>
            <li>
              Move the word importance score slider to 50% for the important
              word "political".
            </li>
            <li>
              <i>
                <strong>Optional:</strong>
              </i>{" "}
              Feel free to make any other chances to help you get used to using
              the task interface. Just make sure you don't make any more changes
              for the important word "political" as this could make you fail the
              attention check.
            </li>
            <li>
              Once you have completed this task press the button "Checked
              comment". If you are required to reset your changes, press "Reset
              comment".
            </li>
          </ol>
          <i>
            If you require to reopen this instructions brief press{" "}
            <strong>B</strong> on your keyboard.
          </i>
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
