// import react components
import { useContext, useEffect, useState } from "react";

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
import UserLogContext from "../context/UserLogContext";

const TabContent = ({ explanationDataIndex }) => {
  const { userLog, setUserLog } = useContext(UserLogContext);

  const { explanationData, setExplanationData } = useContext(
    ExplanationDataContext
  );

  const generateTimestamp = () => {
    return new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, "/")
      .replace("T", " ");
  };

  // Create a key/value object for important key words in comment explanation
  const getImportantWordsKV = (type) => {
    let explanationDataImportantWords;

    if (type === "user") {
      explanationDataImportantWords =
        explanationData.user[explanationDataIndex].important_words;
    } else {
      explanationDataImportantWords =
        explanationData.reset[explanationDataIndex].important_words;
    }

    return explanationDataImportantWords.reduce((map, obj) => {
      map[obj.word] = { weight: obj.weight, label: obj.label };
      return map;
    }, {});
  };

  const [importantWordsKVReset] = useState(getImportantWordsKV("reset"));

  const [importantWordsKVUser, setImportantWordsKVUser] = useState(
    getImportantWordsKV("user")
  );

  // If explanationData changes then update importantWordsKVUser value using getImportantWordsKV function
  useEffect(() => {
    setImportantWordsKVUser(getImportantWordsKV("user"));
  }, [explanationData]);

  const onSliderChange = ({ value, word }) => {
    let finalValue = value / 100;

    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Changed "${word}" slider to ${finalValue} for comment ${
        prevExplanationData.user[explanationDataIndex].id
      }`;

      setUserLog([...userLog, logResult]);

      const foundIndex = prevExplanationData.user[
        explanationDataIndex
      ].important_words.findIndex((item) => item.word === word);

      prevExplanationData.user[explanationDataIndex].important_words[
        foundIndex
      ].weight = structuredClone(finalValue);

      return { ...prevExplanationData };
    });
  };

  const onImportantWordLabelChange = ({ value, word }) => {
    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Changed "${word}" label to ${
        value.target.value
      } for comment ${prevExplanationData.user[explanationDataIndex].id}`;

      setUserLog([...userLog, logResult]);

      const foundIndex = prevExplanationData.user[
        explanationDataIndex
      ].important_words.findIndex((item) => item.word === word);

      if (value.target.value === "Toxic") {
        prevExplanationData.user[explanationDataIndex].important_words[
          foundIndex
        ].label = "Toxic";
      } else {
        prevExplanationData.user[explanationDataIndex].important_words[
          foundIndex
        ].label = "Non-toxic";
      }
      return { ...prevExplanationData };
    });
  };

  const onLabelChange = ({ value }) => {
    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Changed comment label to ${
        value.target.value
      } for comment ${prevExplanationData.user[explanationDataIndex].id}`;

      setUserLog([...userLog, logResult]);

      prevExplanationData.user[explanationDataIndex].prediction_label =
        structuredClone(value.target.value);

      return { ...prevExplanationData };
    });
  };

  const onCheckButtonClick = () => {
    window.scrollTo(0, 0);
    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Checked comment ${
        prevExplanationData.user[explanationDataIndex].id
      }`;

      setUserLog([...userLog, logResult]);

      prevExplanationData.user[explanationDataIndex].checked = true;

      return { ...prevExplanationData };
    });
  };

  const onResetButtonClick = () => {
    window.scrollTo(0, 0);
    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Reset comment ${
        prevExplanationData.user[explanationDataIndex].id
      }`;

      setUserLog([...userLog, logResult]);

      prevExplanationData.user[explanationDataIndex] = structuredClone(
        prevExplanationData.reset[explanationDataIndex]
      );

      return { ...prevExplanationData };
    });
  };

  // Highlighting text functions
  const Highlight = ({ children }) => {
    try {
      if (importantWordsKVReset[children].label === "Toxic") {
        // if word is labelled toxic set highlight color to red
        return <span style={{ color: "rgb(237, 109, 133)" }}>{children}</span>;
      } else {
        // if word is labelled non-toxic set highlight color to green
        return <span style={{ color: "rgb(77, 83, 185)" }}>{children}</span>;
      }
    } catch {
      // if word is not found (to catch any bugs) set highlight colour to light-grey
      return <span style={{ color: "rgb(192, 192, 192)" }}>{children}</span>;
    }
  };

  const findChunksMultipleMatches = ({ searchWords, textToHighlight }) => {
    // Regex expression to find words to be highlighted
    const regexHighlight = new RegExp(
      searchWords
        .map((value) => {
          return `((\\s|^|\\(|\\{|\\[|\\"|\\<|\\-|\\:|\\'|\\/)${value}(?=\\s|$|\\.|\\,|\\"|\\>|\\)|\\}|\\]|\\;|\\!|\\?|\\-|\\:|\\'|\\/))`;
        })
        .join("|"),
      "g"
    );

    let regexMatches;
    let matchPositions = [];
    while ((regexMatches = regexHighlight.exec(textToHighlight)) !== null) {
      let startIndex;
      if (
        // because safari browser doesn't support positive lookbehind expression, move starting index by one
        regexMatches[0].match(
          new RegExp(`\\s|\\(|\\{|\\[|\\"|\\<|\\-|\\:|\\'`),
          ""
        ) === null
      ) {
        startIndex = regexMatches.index;
      } else {
        startIndex = regexMatches.index + 1;
      }
      matchPositions.push({
        start: startIndex,
        end: regexHighlight.lastIndex,
      });
    }

    return matchPositions;
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Comment:</h5>
            <p>
              <Highlighter
                searchWords={Object.keys(importantWordsKVReset)}
                highlightTag={Highlight}
                findChunks={findChunksMultipleMatches}
                style={{ fontWeight: "620" }}
                textToHighlight={
                  explanationData.reset[explanationDataIndex].comment
                }
              />
              <strong>{}</strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <i>
                Words which are highlighted in{" "}
                <span style={{ color: "rgb(77, 83, 185)" }}>blue</span> have a
                higher correlation to labeling the comment as Non-toxic. Words
                which are highlighted in{" "}
                <span style={{ color: "rgb(237, 109, 133)" }}>red</span> have a
                higher correlation to labeling the comment as Toxic.
              </i>
            </p>
            <h6>Important words:</h6>
            <BarChart
              important_words={
                explanationData.reset[explanationDataIndex].important_words
              }
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
                      {
                        explanationData.reset[explanationDataIndex]
                          .prediction_label
                      }{" "}
                      with an{" "}
                      {
                        explanationData.reset[explanationDataIndex]
                          .prediction_proba
                      }
                      % confidence.
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
                          <Form.Select
                            id="commentLabelDropdown"
                            value={
                              explanationData.user[explanationDataIndex]
                                .prediction_label
                            }
                            onChange={(value) => {
                              onLabelChange({
                                value: value,
                              });
                            }}
                          >
                            <option value="Toxic">Toxic</option>
                            <option value="Non-toxic">Non-toxic</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Form.Group>
                  </ListGroup.Item>
                </ListGroup>
              </Card>

              {/* Headings */}
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

              {/* Components */}
              {Object.entries(importantWordsKVUser).map((x) => {
                const iwWord = x[0];
                const iwWordWeight = x[1].weight;
                const iwWordLabel = x[1].label;
                return (
                  <>
                    <Row>
                      <Col style={{ textAlign: "center" }} md={3}>
                        {/* Important word */}
                        <p>{iwWord}</p>
                      </Col>
                      <Col style={{ textAlign: "center" }} md={3}>
                        {/* Label dropdown */}
                        <Form.Select
                          style={{ fontSize: "small" }}
                          value={iwWordLabel}
                          id={iwWord.concat("IWLabelDropdown")}
                          onChange={(value) => {
                            onImportantWordLabelChange({
                              value: value,
                              word: iwWord,
                            });
                          }}
                        >
                          <option value="Toxic">Toxic</option>
                          <option value="Non-toxic">Non-toxic</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ textAlign: "center" }} md={6}>
                        {/* Word importance slider */}
                        <Slider
                          value={100 * iwWordWeight}
                          onChange={(value) => {
                            onSliderChange({
                              value: value,
                              word: iwWord,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                  </>
                );
              })}
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabContent;
