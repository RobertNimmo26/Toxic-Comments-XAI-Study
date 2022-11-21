// import components
import TaskTimer from "./TaskTimer";

// import bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

// import rc-slider components
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TabContent = ({ comment }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={7}>
            <h3>Comment:</h3>
            <p>
              <strong>{comment.comment}</strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <i>
                Words which are highlighted in blue have a higher correlation to
                labeling the comment as Non-toxic. Words which are highlighted
                in red have a higher correlation to labeling the comment as
                Toxic.
              </i>
            </p>
          </Col>
          <Col md={5}>
            <Stack gap={3}>
              <TaskTimer />

              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>
                      We predict this comment is Toxic with an 80% confidence
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p style={{ textAlign: "center" }}>
                      <b>Do you agree with the prediction?</b>
                    </p>
                    <Form.Group>
                      <Row>
                        <Col md={4}>
                          <Form.Label
                            style={{ textAlign: "center" }}
                            htmlFor="commentLabelDropdown"
                          >
                            Comment Label
                          </Form.Label>
                        </Col>
                        <Col md={8}>
                          <Form.Select id="commentLabelDropdown">
                            <option selected>Toxic</option>
                            <option>Non-toxic</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Form.Group>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <Slider />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabContent;
