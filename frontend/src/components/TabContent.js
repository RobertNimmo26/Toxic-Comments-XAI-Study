// import react components
import { useContext } from "react";

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

import Highlighter from "react-highlight-words";

// import context
import ExplanationDataContext from "../context/ExplanationDataContext";

const TabContent = ({ explanationDataComment, explanationDataIndex }) => {
  const { explanationData, setExplanationData } = useContext(
    ExplanationDataContext
  );

  const importantWordsKV = explanationDataComment.important_words.reduce(
    (map, obj) => {
      map[obj.word] = obj.weight;
      return map;
    },
    {}
  );

  const Highlight = ({ children }) => {
    if (importantWordsKV[children] > 0) {
      return <span style={{ color: "rgb(255, 99, 132)" }}>{children}</span>;
    } else {
      return <span style={{ color: "rgb(75, 192, 192)" }}>{children}</span>;
    }
  };

  const onSliderChange = ({ value, toxic, word }) => {
    let finalValue =
      (value * Math.max(...Object.values(importantWordsKV).map(Math.abs))) /
      100;

    if (toxic === false) {
      finalValue = -finalValue;
    }

    setExplanationData((prevExplanationData) => {
      const foundIndex = prevExplanationData.user[
        explanationDataIndex
      ].important_words.findIndex((item) => item.word === word);

      prevExplanationData.user[explanationDataIndex].important_words[
        foundIndex
      ].weight = finalValue;

      return { ...prevExplanationData };
    });

    console.log(finalValue);
  };

  const onImportantWordLabelChange = ({ value, word }) => {
    setExplanationData((prevExplanationData) => {
      const foundIndex = prevExplanationData.user[
        explanationDataIndex
      ].important_words.findIndex((item) => item.word === word);

      let wordWeight = Math.abs(
        prevExplanationData.user[explanationDataIndex].important_words[
          foundIndex
        ].weight
      );

      if (value.target.value === "Non-toxic") {
        wordWeight *= -1;
      }

      prevExplanationData.user[explanationDataIndex].important_words[
        foundIndex
      ].weight = wordWeight;

      return { ...prevExplanationData };
    });

    console.log(value.target.value, word);
  };

  const onLabelChange = ({ value }) => {
    console.log(value.target.value);
    setExplanationData((prevExplanationData) => {
      prevExplanationData.user[explanationDataIndex].prediction_label =
        value.target.value;

      return { ...prevExplanationData };
    });
  };

  const onCheckButtonClick = () => {
    setExplanationData((prevExplanationData) => {
      prevExplanationData.user[explanationDataIndex].checked = true;

      return { ...prevExplanationData };
    });
  };

  const onResetButtonClick = () => {
    // setExplanationData((prevExplanationData) => {
    //   prevExplanationData.user[0].checked = true;
    //   return { ...prevExplanationData };
    // });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Comment:</h5>
            <p>
              <Highlighter
                searchWords={Object.keys(importantWordsKV)}
                highlightTag={Highlight}
                style={{ fontWeight: "620" }}
                textToHighlight={explanationDataComment.comment}
              />
              <strong>{}</strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <i>
                Words which are highlighted in{" "}
                <span style={{ color: "rgb(75, 192, 192)" }}>blue</span> have a
                higher correlation to labeling the comment as Non-toxic. Words
                which are highlighted in{" "}
                <span style={{ color: "rgb(255, 99, 132)" }}>red</span> have a
                higher correlation to labeling the comment as Toxic.
              </i>
            </p>
            <h6>Important words:</h6>
            <BarChart
              important_words={explanationDataComment.important_words}
            />
            <Row style={{ textAlign: "center", marginTop: "50px" }}>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onResetButtonClick();
                  }}
                >
                  Reset comment
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onCheckButtonClick();
                  }}
                >
                  Checked comment
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
                      We predict this comment is{" "}
                      {explanationDataComment.prediction_label} with an{" "}
                      {explanationDataComment.prediction_proba}% confidence.
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
                          {explanationDataComment.prediction_label ===
                          "Toxic" ? (
                            <Form.Select
                              id="commentLabelDropdown"
                              onChange={(value) => {
                                onLabelChange({
                                  value: value,
                                });
                              }}
                            >
                              <option selected value="Toxic">
                                Toxic
                              </option>
                              <option value="Non-toxic">Non-toxic</option>
                            </Form.Select>
                          ) : (
                            <Form.Select
                              id="commentLabelDropdown"
                              onChange={(value) => {
                                onLabelChange({
                                  value: value,
                                });
                              }}
                            >
                              <option value="Toxic">Toxic</option>
                              <option selected value="Non-toxic">
                                Non-toxic
                              </option>
                            </Form.Select>
                          )}
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
              {explanationDataComment.important_words.map((x, i) => (
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
                          onChange={(value) => {
                            onImportantWordLabelChange({
                              value: value,
                              word: x.word,
                            });
                          }}
                        >
                          <option value="Toxic" selected>
                            Toxic
                          </option>
                          <option value="Non-toxic">Non-toxic</option>
                        </Form.Select>
                      ) : (
                        <Form.Select
                          style={{ fontSize: "small" }}
                          id={x.word.concat("IWLabelDropdown")}
                          onChange={(value) => {
                            onImportantWordLabelChange({
                              value: value,
                              word: x.word,
                            });
                          }}
                        >
                          <option value="Toxic">Toxic</option>
                          <option value="Non-toxic" selected>
                            Non-toxic
                          </option>
                        </Form.Select>
                      )}
                    </Col>

                    <Col style={{ textAlign: "center" }} md={6}>
                      {x.weight > 0 ? (
                        <Slider
                          defaultValue={
                            (100 * x.weight) /
                            Math.max(
                              ...Object.values(importantWordsKV).map(Math.abs)
                            )
                          }
                          onChange={(value) => {
                            onSliderChange({
                              value: value,
                              toxic: true,
                              word: x.word,
                            });
                          }}
                        />
                      ) : (
                        <Slider
                          defaultValue={
                            (100 * -x.weight) /
                            Math.max(
                              ...Object.values(importantWordsKV).map(Math.abs)
                            )
                          }
                          onChange={(value) => {
                            onSliderChange({
                              value: value,
                              toxic: false,
                              word: x.word,
                            });
                          }}
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
