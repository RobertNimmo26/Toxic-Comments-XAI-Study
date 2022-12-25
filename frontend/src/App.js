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

import ExplanationData from "./config/ExplanationData";
alert("Number of comments" + Object.keys(ExplanationData).length);

const App = () => {
  const [page, setPage] = useState(1);
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
          <PracticeTask />
        </PageContext.Provider>
      );
    case 5:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={pageValue}>
          <Task />
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
