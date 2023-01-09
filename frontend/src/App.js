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

// import data
import MainTaskExplanationData from "./config/MainTaskExplanationData";
import PracticeTaskExplanationData from "./config/PracticeExplanationData";

// import
import Container from "react-bootstrap/Container";

const App = () => {
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const studyID = queryParameters.get("STUDY_ID");
    const prolificID = queryParameters.get("PROLIFIC_PID");
    const sessionID = queryParameters.get("SESSION_ID");

    console.log(studyID, prolificID, sessionID);
  }, []);

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
  const [page, setPage] = useState(3);

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

  switch (page) {
    case 1:
      window.scrollTo(0, 0);
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
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={pageValue}>
          <TaskIntroduction />
        </PageContext.Provider>
      );
    case 4:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={pageValue}>
          <ExplanationDataContext.Provider
            value={practiceTaskExplanationDataValue}
          >
            <PracticeTask />
          </ExplanationDataContext.Provider>
        </PageContext.Provider>
      );
    case 5:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={pageValue}>
          <ExplanationDataContext.Provider value={mainTaskExplanationDataValue}>
            <Task />
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
      console.log(practiceTaskExplanationData);
      console.log(mainTaskExplanationData);
      console.log(preTaskForm);
      console.log(postTaskForm);

      // setTimeout(() => {
      //   window.location.replace("https://google.com");
      // }, 5000);

      return <Redirect />;
    default:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={pageValue}>
          <StudyIntroduction />
        </PageContext.Provider>
      );
  }
};

export default App;
