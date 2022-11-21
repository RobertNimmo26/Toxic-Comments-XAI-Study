// import react components
import { useContext } from "react";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import context
import PageContext from "../context/PageContext";

const ModelEndTask = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <Modal show={true} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Task has ended</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The task time limit has been reached. Modifications made from comments
          that haven't been checked has not been saved. You will now be taken to
          the Post-task questionnaire.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setPage(6)}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelEndTask;
