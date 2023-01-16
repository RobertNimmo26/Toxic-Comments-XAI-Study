// import react components
import { useContext } from "react";

// import components
import ModelTaskTimerEndTask from "./ModalTaskTimerEndTask";

// import bootstrap components
import Button from "react-bootstrap/Button";

// import react-timer-hook
import { useTimer } from "react-timer-hook";

// import context
import ExpiryTimestampContext from "../context/ExpiryTimestampContext";
import PageContext from "../context/PageContext";

const TaskTimer = () => {
  const { page, setPage } = useContext(PageContext);
  const time = useContext(ExpiryTimestampContext);
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: time,
  });

  if (page === 5) {
    return (
      <>
        <Button variant="outline-primary" disabled={true}>
          Time left: {minutes} minutes {seconds} seconds
        </Button>
        {!isRunning && <ModelTaskTimerEndTask />}
      </>
    );
  } else {
    return (
      <>
        <Button size="lg" variant="outline-primary" disabled={true}>
          No time limit
        </Button>
      </>
    );
  }
};

export default TaskTimer;
