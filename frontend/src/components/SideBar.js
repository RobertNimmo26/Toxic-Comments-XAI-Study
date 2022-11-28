// import bootstrap components
import ListGroup from "react-bootstrap/ListGroup";

const SideBar = ({ comments }) => {
  return (
    <>
      <ListGroup variant="flush" style={{ height: "90%", overflowY: "auto" }}>
        {comments.map((x, i) => (
          <ListGroup.Item action eventKey={x.id}>
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">Comment {x.id}</strong>
              <small>Checked</small>
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
