// import react components
import { useState, useEffect } from "react";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

// import task_interface image
import TaskInterfaceImage from "../assets/images/task_interface.png";

const ModalPrototypeInstructions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // reopen modal if "I" is pressed on the keyboard
  useEffect(() => {
    const handler = (event) => {
      if (event.keyCode === 73) {
        handleShow();
      }
    };

    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler, false);
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={true}
        size="xl"
        centered
      >
        <Modal.Header>
          <Modal.Title>Task interface</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={TaskInterfaceImage}
            fluid
            alt="Task interface"
            style={{
              marginBottom: "50px",
              width: "90%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Container>
            <h5>Summary of task:</h5>
            <p>
              <h6>For each comment you check:</h6>
              <ol>
                <li>Read the comment</li>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    If your agree with the comment label and happy with the
                    explanation, press "Checked comment" button.
                  </li>
                  <li>If you don't agree, continue checking comment.</li>
                </ul>
                <li>
                  Check that the comment has been labelled ("Toxic" or
                  "Non-toxic") correctly by the AI system.
                </li>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    If the comment has not been labelled correctly, change the
                    comment label.
                  </li>
                </ul>
                <li>
                  Check if the top-10 most important words for the comment
                  requires any adjustments. These adjustments may include:
                </li>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    If an important word has the wrong label associated with it,
                    change the word's label.
                  </li>
                  <li>
                    If a word importance score for an important word is too high
                    or too low, change the score to a more appropriate value.
                  </li>
                </ul>
                <li>
                  Check if there are any words in the comment which you believe
                  are important to the final prediction but haven't been flagged
                  in the top-10 most important words.
                </li>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    If there are any additional words, add them and follow the
                    adjustments in the previous bullet points.
                  </li>
                </ul>
              </ol>
            </p>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Close (or press esc key)
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPrototypeInstructions;
