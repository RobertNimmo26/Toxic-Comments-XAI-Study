// import react components
import { useContext } from "react";

// import bootstrap components
import ListGroup from "react-bootstrap/ListGroup";

// import context
import ExplanationDataContext from "../context/ExplanationDataContext";

const SideBar = () => {
  const { explanationData, setExplanationData } = useContext(
    ExplanationDataContext
  );
  return (
    <>
      <ListGroup variant="flush" style={{ height: "100vh", overflowY: "auto" }}>
        {explanationData.user.map((x, i) => (
          <ListGroup.Item action eventKey={i + 1}>
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">Comment {i + 1}</strong>
              {explanationData.user[i].checked ? (
                <small>Checked</small>
              ) : (
                <small>Unchecked</small>
              )}
            </div>
            <div class="col-10 mb-1 small">
              {x.comment.split(" ").slice(0, 5).join(" ")}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default SideBar;
