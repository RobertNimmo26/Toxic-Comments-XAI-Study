// import components
import TaskTimer from "./TaskTimer";
import BarChart from "./BarChart";

// import bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import rc-slider components
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TabContent = ({ comment }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Comment:</h5>
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
            <h6>Important words:</h6>
            <BarChart important_words={comment.important_words} />
            <Row style={{ textAlign: "center", marginTop: "50px" }}>
              <Col>
                <Button variant="primary" size="lg">
                  Reset
                </Button>
              </Col>
              <Col>
                <Button variant="primary" size="lg">
                  Checked
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Stack gap={3}>
              <Row style={{ marginLeft: "55px", marginRight: "55px" }}>
                <TaskTimer />
              </Row>

              <Card style={{ marginLeft: "55px", marginRight: "55px" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    style={{ marginTop: "1px", marginBottom: "1px" }}
                  >
                    <h6>
                      We predict this comment is Toxic with an 80% confidence
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ marginTop: "1px", marginBottom: "1px" }}
                  >
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
              <Row>
                <Col style={{ textAlign: "center" }} md={3}>
                  <strong>Important word</strong>
                </Col>
                <Col style={{ textAlign: "center" }} md={3}>
                  <strong>Label</strong>
                </Col>
                <Col style={{ textAlign: "center" }} md={6}>
                  <strong>Word importance</strong>{" "}
                </Col>
              </Row>
              {comment.important_words.map((x, i) => (
                <>
                  <Row>
                    <Col style={{ textAlign: "center" }} md={3}>
                      <p>{x.word}</p>
                    </Col>
                    <Col style={{ textAlign: "center" }} md={3}>
                      {x.weight > 0 ? (
                        <Form.Select
                          style={{ fontSize: "small" }}
                          id={x.word.concat("IWLabelDropdown")}
                        >
                          <option selected>Toxic</option>
                          <option>Non-toxic</option>
                        </Form.Select>
                      ) : (
                        <Form.Select
                          style={{ fontSize: "small" }}
                          id={x.word.concat("IWLabelDropdown")}
                        >
                          <option>Toxic</option>
                          <option selected>Non-toxic</option>
                        </Form.Select>
                      )}
                    </Col>

                    <Col style={{ textAlign: "center" }} md={6}>
                      {x.weight > 0 ? (
                        <Slider
                          defaultValue={(100 * x.weight) / comment.max_value}
                        />
                      ) : (
                        <Slider
                          defaultValue={(100 * -x.weight) / comment.max_value}
                        />
                      )}
                    </Col>
                  </Row>
                </>
              ))}
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabContent;
