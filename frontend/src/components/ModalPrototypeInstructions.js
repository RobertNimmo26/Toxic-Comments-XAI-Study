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
