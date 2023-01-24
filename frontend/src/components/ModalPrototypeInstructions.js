// import react components
import { useState, useEffect } from "react";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

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
          <ol>
            <li>
              You will first require to select a comment from the scrollable
              list on the left hand side of the screen <strong>(1)</strong>. The
              list displays the comment number, the first five words of the
              comment, the comments checked status and the predicted label of
              the comment. By default when you start the task, the first comment
              in the list will be selected.
            </li>
            <br />
            <li>
              Once the comment has been selected you will be presented a
              dashboard overview for the specific comment. This dashboard will
              include the full comment <strong>(2)</strong>, a barchart
              displaying the top-10 most important words to the prediction{" "}
              <strong>(3)</strong>, the overall prediction label for the comment{" "}
              <strong>(7)</strong> and a dropdown box which you can you to
              change the prediction label <strong>(8)</strong>, and a list of
              the top-10 most important words to the prediction{" "}
              <strong>(9)</strong> (the same words displayed in the barchart)
              and the ability to change the label associated to the word and the
              word importance weight (a higher word weight indicates a word is
              more important to final prediction in the AI system).
            </li>
            <br />
            <li>
              You should check if the comment prediction and explanation is
              accurate. Make any changes to the default values if you believe
              they are not correct or haven't been represented well by the AI
              system.
              <br />
              <br />
              For example, if you think the comment should be labelled as
              "Non-toxic" and not "Toxic", use the dropdown box{" "}
              <strong>(8)</strong> to change the comment label to "Non-toxic".
              <br />
              <br />
              Another example is, if you think one of the important words has
              been associated with the wrong label (Toxic/Non-toxic) and should
              have been less important to the final decision in the AI system,
              first change the dropdown box <strong>(9)</strong> for the
              associated important word to the other label and change the slider{" "}
              <strong>(9)</strong> to a lower importance.
              <br />
              <br />
              You can make as many changes are you feel are necessary. If you
              feel the AI system is completely wrong thats completely fine.
            </li>
            <br />
            <li>
              Once your happy with all your changes, press the "Checked comment"
              button <strong>(5)</strong>. This will automatically take you to
              the next comment in the list, however, you can still change the
              comment you would like to review using the scrollable list{" "}
              <strong>(1)</strong>. Only after you pressed "Checked comment"
              will any changes be saved. This includes if you want to make
              additional changes later to an already "Checked" comment.
              <br />
              <br />
              If you make any mistake or just rather reset all your changes you
              have made, press the "Reset comment" button <strong>(4)</strong>.
              This will also change the status of the comment to "Unchecked" if
              you have already checked the comment.
            </li>
          </ol>
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
