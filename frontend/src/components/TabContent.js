// import react components
import { useContext, useEffect, useState, Fragment } from "react";

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
import { sliderHandleRender } from "../handleHooks/sliderHandle";

// import highlighter component
import Highlighter from "react-highlight-words";

// import uuid generator component (unique ID)
import { v4 as uuidv4 } from "uuid";

// import context
import ExplanationDataContext from "../context/ExplanationDataContext";
import UserLogContext from "../context/UserLogContext";

const TabContent = ({
  explanationDataIndex,
  currentTabValues,
  countCheckedValues,
}) => {
  // generate timestamp string
  const generateTimestamp = () => {
    return new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, "/")
      .replace("T", " ");
  };

  // ---

  // Access the currentTab state values
  const { currentTab, setCurrentTab } = currentTabValues;

  // ---

  // Access the countChecked state values
  const { countChecked, setCountChecked } = countCheckedValues;

  // ---

  // Explanation data context
  const { explanationData, setExplanationData } = useContext(
    ExplanationDataContext
  );

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

  // Set the states for importantWordsKVUser value using getImportantWordsKV function
  const [importantWordsKVReset] = useState(getImportantWordsKV("reset"));
  const [importantWordsKVUser, setImportantWordsKVUser] = useState(
    getImportantWordsKV("user")
  );

  // If explanationData changes, then update importantWordsKVUser value using getImportantWordsKV function
  useEffect(() => {
    setImportantWordsKVUser(getImportantWordsKV("user"));
  }, [explanationData]);

  // ---

  // UserLog context
  const { userLog, setUserLog } = useContext(UserLogContext);

  // ---

  // New important words added by users required functions //

  // Set the state for newImportantWords to a empty list
  const [newImportantWords, setNewImportantWords] = useState([]);

  // Add a new IW
  const addNewIWWord = () => {
    setNewImportantWords((preNewImportantWords) => {
      const newIWID = uuidv4();

      const logResult = `${generateTimestamp()}: Added a new important word with ID ${newIWID} for comment ${
        explanationData.user[explanationDataIndex].id
      }`;
      setUserLog([...userLog, logResult]);

      return [
        ...preNewImportantWords,
        { word: undefined, weight: 0, label: undefined, id: newIWID },
      ];
    });
  };

  // Delete a new IW
  const deleteNewIWWord = (id) => {
    setNewImportantWords((preNewImportantWords) => {
      const logResult = `${generateTimestamp()}: Deleted a new important word with ID ${id} for comment ${
        explanationData.user[explanationDataIndex].id
      }`;
      setUserLog([...userLog, logResult]);

      return preNewImportantWords.filter((x) => x.id !== id);
    });
  };

  // Get all possible new IW from the comment
  const getPossibleNewIWWords = () => {
    const notInclude = Object.keys(importantWordsKVReset);
    const comment = explanationData.reset[explanationDataIndex].comment;

    return [
      ...new Set(
        comment.match(/\b(\w+)\b/g).filter((x) => !notInclude.includes(x))
      ),
    ];
  };

  // When the word changes for the new IW object
  const onNewIWWordChange = ({ value, id }) => {
    setNewImportantWords((preNewImportantWords) => {
      const logResult = `${generateTimestamp()}: Changed IW word on new IW with the ID ${id} to ${
        value.target.value
      } for comment ${explanationData.user[explanationDataIndex].id}`;

      setUserLog([...userLog, logResult]);

      const foundIndex = preNewImportantWords.findIndex(
        (item) => item.id === id
      );

      preNewImportantWords[foundIndex].word = value.target.value;

      return [...preNewImportantWords];
    });
  };

  // When the label changes for the new IW object
  const onNewIWLabelChange = ({ value, id }) => {
    console.log(id);
    setNewImportantWords((preNewImportantWords) => {
      const logResult = `${generateTimestamp()}: Changed new IW with the ID ${id} label to ${
        value.target.value
      } for comment ${explanationData.user[explanationDataIndex].id}
      `;

      setUserLog([...userLog, logResult]);

      const foundIndex = preNewImportantWords.findIndex(
        (item) => item.id === id
      );

      preNewImportantWords[foundIndex].label = value.target.value;

      return [...preNewImportantWords];
    });
  };

  // When the weight slider changes for the new IW object
  const onNewIWSliderChange = ({ value, id }) => {
    let finalValue = value / 100;

    setNewImportantWords((preNewImportantWords) => {
      const logResult = `${generateTimestamp()}: Changed new IW with the ID ${id} slider to ${finalValue} for comment ${
        explanationData.user[explanationDataIndex].id
      }
      `;

      setUserLog([...userLog, logResult]);

      const foundIndex = preNewImportantWords.findIndex(
        (item) => item.id === id
      );

      preNewImportantWords[foundIndex].weight = structuredClone(finalValue);

      return [...preNewImportantWords];
    });
  };

  // ---

  // Top-10 important words required functions //

  // When the weight slider changes for the important word object
  const onImportantWordSliderChange = ({ value, word }) => {
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

  // When the label changes for the important word object
  const onImportantWordLabelChange = ({ value, word }) => {
    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Changed "${word}" label to ${
        value.target.value
      } for comment ${prevExplanationData.user[explanationDataIndex].id}`;

      setUserLog([...userLog, logResult]);

      const foundIndex = prevExplanationData.user[
        explanationDataIndex
      ].important_words.findIndex((item) => item.word === word);

      prevExplanationData.user[explanationDataIndex].important_words[
        foundIndex
      ].label = value.target.value;

      return { ...prevExplanationData };
    });
  };

  // ---

  // The comment label change //

  // When the label changes for the comment object
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

  // ---

  // Checked comment object
  const onCheckButtonClick = () => {
    window.scrollTo(0, 0);

    if (!explanationData.user[explanationDataIndex].checked) {
      setCountChecked(countChecked + 1);
    }

    setExplanationData((prevExplanationData) => {
      const logResult = `${generateTimestamp()}: Checked comment ${
        prevExplanationData.user[explanationDataIndex].id
      }`;

      setUserLog([...userLog, logResult]);

      const newIWToAdd = newImportantWords.filter(
        (item) => item.word !== undefined && item.label !== undefined
      );

      console.log(newIWToAdd);

      prevExplanationData.user[explanationDataIndex].new_important_words =
        newIWToAdd;

      prevExplanationData.user[explanationDataIndex].checked = true;

      return { ...prevExplanationData };
    });

    if (+currentTab !== explanationData.user.length) {
      setCurrentTab(+currentTab + 1);
    }

    console.log(explanationData);
  };

  // Reset the comment object
  const onResetButtonClick = () => {
    window.scrollTo(0, 0);

    if (explanationData.user[explanationDataIndex].checked) {
      setCountChecked(countChecked - 1);
    }

    // Reset new important words
    setNewImportantWords([]);

    // Reset users explanations data
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

  // ---

  // Highlighting text functions //

  const Highlight = ({ children }) => {
    try {
      if (importantWordsKVReset[children].label === "Toxic") {
        // if word is labelled toxic set highlight color to red
        return <span style={{ color: "rgb(237, 109, 133)" }}>{children}</span>;
      } else {
        // if word is labelled non-toxic set highlight color to blue
        return <span style={{ color: "rgb(77, 83, 185)" }}>{children}</span>;
      }
    } catch {
      // if word is not found (to catch any bugs) set highlight colour to light-grey
      return <span style={{ color: "rgb(192, 192, 192)" }}>{children}</span>;
    }
  };

  // Highlight regex
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
      <Container style={{ marginBottom: "30px" }}>
        <Row>
          <Col md={6}>
            {/* Highlighted comment */}
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

            {/* Important words bar chart */}
            <h6>Important words:</h6>
            <BarChart
              important_words={
                explanationData.reset[explanationDataIndex].important_words
              }
            />

            {/* Add new important words */}
            <hr />
            <Stack gap={3}>
              <Row>
                <Col style={{ textAlign: "center" }} md={7}>
                  <h5>Add new important words</h5>
                </Col>
                <Col style={{ textAlign: "center" }} md={5}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      addNewIWWord();
                    }}
                    className="rounded-pill"
                  >
                    Add new word
                  </Button>
                </Col>
              </Row>
              {/* Headings */}
              <Row>
                <Col style={{ textAlign: "center" }} md={3}>
                  <strong>Important word</strong>
                </Col>
                <Col style={{ textAlign: "center" }} md={3}>
                  <strong>Label</strong>
                </Col>
                <Col style={{ textAlign: "center" }} md={4}>
                  <strong>Word importance</strong>
                </Col>
                <Col style={{ textAlign: "center" }} md={2}>
                  <strong>Delete word</strong>
                </Col>
              </Row>
              <Row>
                {newImportantWords.map((newIW) => (
                  <Fragment key={newIW.id}>
                    <Row>
                      <Col style={{ textAlign: "center" }} md={3}>
                        {/* Important word dropdown */}
                        <Form.Select
                          style={{ fontSize: "small" }}
                          value={newIW.word}
                          id={newIW.id.concat("NewIWWordDropdown")}
                          onChange={(value) => {
                            onNewIWWordChange({
                              value: value,
                              id: newIW.id,
                            });
                          }}
                        >
                          <option
                            value={undefined}
                            selected="selected"
                            disabled={true}
                          >
                            Select word
                          </option>
                          {getPossibleNewIWWords().map((possibleOption) => {
                            const alreadySelectedIndex =
                              newImportantWords.findIndex(
                                (x) => x.word === possibleOption
                              );

                            // If word already selected (alreadySelected > -1) and
                            // this is not the instance where the word has been selected,
                            // don't include word as a option
                            if (
                              alreadySelectedIndex > -1 &&
                              newImportantWords[alreadySelectedIndex].id !==
                                newIW.id
                            ) {
                              return <></>;
                            } else {
                              return (
                                <option value={possibleOption}>
                                  {possibleOption}
                                </option>
                              );
                            }
                          })}
                        </Form.Select>
                      </Col>
                      <Col style={{ textAlign: "center" }} md={3}>
                        {/* Label dropdown */}
                        <Form.Select
                          style={{ fontSize: "small" }}
                          value={newIW.label}
                          id={newIW.id.concat("NewIWLabelDropdown")}
                          onChange={(value) => {
                            onNewIWLabelChange({
                              value: value,
                              id: newIW.id,
                            });
                          }}
                        >
                          <option
                            value={undefined}
                            selected="selected"
                            disabled={true}
                          >
                            Select label
                          </option>
                          <option value="Toxic">Toxic</option>
                          <option value="Non-toxic">Non-toxic</option>
                        </Form.Select>
                      </Col>
                      <Col style={{ textAlign: "center" }} md={5}>
                        {/* Word importance slider */}
                        <Slider
                          value={100 * newIW.weight}
                          onChange={(value) => {
                            onNewIWSliderChange({
                              value: value,
                              id: newIW.id,
                            });
                          }}
                          handleRender={sliderHandleRender}
                        />
                      </Col>
                      <Col md={1}>
                        <Button
                          variant="link"
                          onClick={() => {
                            deleteNewIWWord(newIW.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                        </Button>
                      </Col>
                    </Row>
                  </Fragment>
                ))}
              </Row>
            </Stack>
            <hr />

            {/* Reset and checked comment buttons */}
            <Row style={{ textAlign: "center", marginTop: "20px" }}>
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
              {/* Tasktimer */}
              <Row style={{ marginLeft: "55px", marginRight: "55px" }}>
                <TaskTimer />
              </Row>

              {/* Prediction probablity */}
              <Card style={{ marginLeft: "55px", marginRight: "55px" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    style={{ marginTop: "1px", marginBottom: "1px" }}
                  >
                    <h6 style={{ textAlign: "center" }}>
                      We predict this comment is
                      <br />
                      <strong>
                        {
                          explanationData.reset[explanationDataIndex]
                            .prediction_label
                        }
                      </strong>{" "}
                      with an{" "}
                      <strong>
                        {
                          explanationData.reset[explanationDataIndex]
                            .prediction_proba
                        }
                        %{" "}
                      </strong>
                      confidence.
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
                        {/* Change comment label dropdown */}
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

              {/* Top-10 important words */}
              <h5 style={{ textAlign: "center" }}>
                Top-10 most important words
              </h5>
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

              {Object.entries(importantWordsKVUser).map((x) => {
                const iwWord = x[0];
                const iwWordWeight = x[1].weight;
                const iwWordLabel = x[1].label;
                return (
                  <>
                    <Fragment key={x}>
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
                              onImportantWordSliderChange({
                                value: value,
                                word: iwWord,
                              });
                            }}
                            handleRender={sliderHandleRender}
                          />
                        </Col>
                      </Row>
                    </Fragment>
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
