// import react components
import { useContext } from "react";

// import bootstrap components
import ListGroup from "react-bootstrap/ListGroup";

// import context
import ExplanationDataContext from "../context/ExplanationDataContext";

const SideBar = () => {
  const { explanationData } = useContext(ExplanationDataContext);
  return (
    <>
      <ListGroup variant="flush" style={{ height: "100vh", overflowY: "auto" }}>
        {explanationData.user.map((x, i) => (
          <ListGroup.Item action eventKey={i + 1}>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Comment {i + 1}</strong>
              {explanationData.user[i].checked ? (
                <small>Checked</small>
              ) : (
                <small>Unchecked</small>
              )}
            </div>
            <div className="col-10 mb-1 small d-flex w-100 justify-content-between">
              {x.comment.split(" ").slice(0, 5).join(" ")}...
              {explanationData.user[i].prediction_label === "Toxic" ? (
                <strong style={{ textAlign: "right" }}>Toxic</strong>
              ) : (
                <strong style={{ textAlign: "right" }}>Non-toxic</strong>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default SideBar;
