// import react components
import { useContext } from "react";

// import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import context
import PageContext from "../context/PageContext";
import ExplanationDataContext from "../context/ExplanationDataContext";

const ModalCheckedEndTask = () => {
  const { page, setPage } = useContext(PageContext);

  const { explanationData, setExplanationData } = useContext(
    ExplanationDataContext
  );

  const checkedArray = explanationData.user.map((item) => item.checked);

  let messageBody = "";
  let messageTitle = "";
  const nextPage = page + 1;
  if (page === 5) {
    messageBody = `You have completed checking all the comments. You will now be taken to
    the Post-task Questionnaire.`;
    messageTitle = "Task is complete";
  } else {
    messageBody = `You have completed the Practice Task. You will now be taken to
    the main Task.`;
    messageTitle = "Practice task is complete";
  }

  if (checkedArray.every((item) => item === true)) {
    return (
      <>
        <Modal show={true} backdrop="static" keyboard={false} centered>
          <Modal.Header>
            <Modal.Title>{messageTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{messageBody}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setPage(nextPage)}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    <></>;
  }
};

export default ModalCheckedEndTask;
