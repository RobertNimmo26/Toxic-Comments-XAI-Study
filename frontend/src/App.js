// import react components
import { useState } from "react";

// import pages
import Task from "./pages/Task";
import StudyIntroduction from "./pages/StudyIntroduction";
import PreTaskQuestionnaire from "./pages/PreTaskQuestionnaire";
import TaskIntroduction from "./pages/TaskIntroduction";
import PracticeTask from "./pages/PracticeTask";
import PostTaskQuestionnaire from "./pages/PostTaskQuestionnaire";
import ScreenSize from "./pages/ScreenSmall";

// import context
import PageContext from "./context/PageContext";
import PreTaskQuestionnaireContext from "./context/PreTaskQuestionnaireContext";
import ExplanationDataContext from "./context/ExplanationDataContext";

// import data
import MainTaskExplanationData from "./config/MainTaskExplanationData";
import PracticeTaskExplanationData from "./config/PracticeExplanationData";

// import react-router-dom
// import { useSearchParams, useLocation, Router } from "react-router-dom";

const App = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const studyID = queryParameters.get("STUDY_ID");
  const prolificID = queryParameters.get("PROLIFIC_PID");
  const sessionID = queryParameters.get("SESSION_ID");

  console.log(studyID, prolificID, sessionID);

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
  // => set all questions to -1 (unanswered) initially
  const [preTaskForm, setPreTaskForm] = useState({
    tipi1: -1,
    tipi2: -1,
    tipi3: -1,
    tipi4: -1,
    tipi5: -1,
    tipi6: -1,
    tipi7: -1,
    tipi8: -1,
    tipi9: -1,
    tipi10: -1,
    prevExperience: -1,
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
          <PostTaskQuestionnaire />
        </PageContext.Provider>
      );
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
