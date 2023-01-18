// import react components
import { useState, useEffect } from "react";

// import pages
import Task from "./pages/Task";
import StudyIntroduction from "./pages/StudyIntroduction";
import PreTaskQuestionnaire from "./pages/PreTaskQuestionnaire";
import TaskIntroduction from "./pages/TaskIntroduction";
import PracticeTask from "./pages/PracticeTask";
import PostTaskQuestionnaire from "./pages/PostTaskQuestionnaire";
import Redirect from "./pages/Redirect";

// import context
import PageContext from "./context/PageContext";
import PreTaskQuestionnaireContext from "./context/PreTaskQuestionnaireContext";
import PostTaskQuestionnaireContext from "./context/PostTaskQuestionnaireContext";
import ExplanationDataContext from "./context/ExplanationDataContext";
import UserLogContext from "./context/UserLogContext";

// import data
import MainTaskExplanationData from "./config/MainTaskExplanationData";
import PracticeTaskExplanationData from "./config/PracticeExplanationData";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import react-device-detect
import { isDesktop, isIE } from "react-device-detect";

const App = () => {
  // Get Prolific ID info
  const queryParameters = new URLSearchParams(window.location.search);
  const prolificID = queryParameters.get("PROLIFIC_PID");

  const [studyInfo] = useState({
    prolificID: prolificID,
    startTimeStamp: new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, "/")
      .replace("T", " "),
  });

  // User log state
  const [userLog, setUserLog] = useState([]);

  // Explanation data state
  const [mainTaskExplanationData, setMainTaskExplanationData] = useState({
    user: structuredClone(MainTaskExplanationData),
    reset: structuredClone(MainTaskExplanationData),
  });

  // Practice explanation data state
  const [practiceTaskExplanationData, setPracticeTaskExplanationData] =
    useState({
      user: structuredClone(PracticeTaskExplanationData),
      reset: structuredClone(PracticeTaskExplanationData),
    });

  // Page state
  const [page, setPage] = useState(1);

  // Warn users not to refresh page
  if (page !== 1 || page !== 7) {
    window.onbeforeunload = () => true;
  }

  // Everytime page changes, reset window view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Pre task questionnaire questions state
  // => set all questions to null (unanswered) initially
  const [preTaskForm, setPreTaskForm] = useState({
    tipi1: null,
    tipi2: null,
    tipi3: null,
    tipi4: null,
    tipi5: null,
    tipi6: null,
    tipi7: null,
    tipi8: null,
    tipi9: null,
    tipi10: null,
    prevExperience: null,
  });

  // Post task questionnaire questions state
  // => set all questions to null (unanswered) initially
  const [postTaskForm, setPostTaskForm] = useState({
    trust1: null,
    trust2: null,
    trust3: null,
    trust4: null,
    trust5: null,
    trust6: null,
    trust7: null,
    trust8: null,
    perceivedunderstanding: null,
    actualunderstanding1: null,
    actualunderstanding2: null,
    actualunderstanding3: null,
    actualunderstanding4: null,
    actualunderstanding5: null,
  });

  // Setup contexts values
  const userLogValue = { userLog, setUserLog };

  const mainTaskExplanationDataValue = {
    explanationData: mainTaskExplanationData,
    setExplanationData: setMainTaskExplanationData,
  };

  const practiceTaskExplanationDataValue = {
    explanationData: practiceTaskExplanationData,
    setExplanationData: setPracticeTaskExplanationData,
  };

  const pageValue = { page, setPage };

  const preTaskFormValue = { preTaskForm, setPreTaskForm };
  const postTaskFormValue = { postTaskForm, setPostTaskForm };

  // Check that user is running prototype on a desktop/laptop
  if (!isDesktop) {
    return (
      <Container>
        <h3>
          You are using an unsupported device. Please complete study on
          laptop/desktop computer or return the submission on Prolific if you
          are unable to complete the study.
        </h3>
      </Container>
    );
  }

  // Check that user is not using internet explorer
  if (isIE) {
    return (
      <Container>
        <h3>
          You are using an unsupported browser. Please complete study on an
          up-to-date modern browser such as Chrome, Edge, Safari or Firefox.
        </h3>
      </Container>
    );
  }

  switch (page) {
    case 1:
      return (
        <PageContext.Provider value={pageValue}>
          <StudyIntroduction />
        </PageContext.Provider>
      );

    case 2:
      return (
        <PageContext.Provider value={pageValue}>
          <PreTaskQuestionnaireContext.Provider value={preTaskFormValue}>
            <PreTaskQuestionnaire />
          </PreTaskQuestionnaireContext.Provider>
        </PageContext.Provider>
      );
    case 3:
      return (
        <PageContext.Provider value={pageValue}>
          <TaskIntroduction />
        </PageContext.Provider>
      );
    case 4:
      return (
        <PageContext.Provider value={pageValue}>
          <ExplanationDataContext.Provider
            value={practiceTaskExplanationDataValue}
          >
            <UserLogContext.Provider value={userLogValue}>
              <PracticeTask />
            </UserLogContext.Provider>
          </ExplanationDataContext.Provider>
        </PageContext.Provider>
      );
    case 5:
      return (
        <PageContext.Provider value={pageValue}>
          <ExplanationDataContext.Provider value={mainTaskExplanationDataValue}>
            <UserLogContext.Provider value={userLogValue}>
              <Task />
            </UserLogContext.Provider>
          </ExplanationDataContext.Provider>
        </PageContext.Provider>
      );
    case 6:
      return (
        <PageContext.Provider value={pageValue}>
          <PostTaskQuestionnaireContext.Provider value={postTaskFormValue}>
            <PostTaskQuestionnaire />
          </PostTaskQuestionnaireContext.Provider>
        </PageContext.Provider>
      );
    case 7:
      const combined_data = {
        checked: false,
        studyInfo: {
          prolificID: studyInfo.prolificID,
          startTimeStamp: studyInfo.startTimeStamp,
          endTimeStamp: new Date()
            .toISOString()
            .slice(0, 19)
            .replace(/-/g, "/")
            .replace("T", " "),
        },
        questionnaire: { preTask: preTaskForm, postTask: postTaskForm },
        taskDataUser: {
          practice: practiceTaskExplanationData.user,
          main: mainTaskExplanationData.user,
        },
        taskDataReset: {
          practice: practiceTaskExplanationData.reset,
          main: mainTaskExplanationData.reset,
        },
        userLog: userLog,
      };

      return <Redirect content={combined_data} />;
    default:
      return (
        <PageContext.Provider value={pageValue}>
          <StudyIntroduction />
        </PageContext.Provider>
      );
  }
};

export default App;
