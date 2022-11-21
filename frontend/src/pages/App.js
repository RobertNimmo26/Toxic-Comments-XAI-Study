// import react components
import { useState } from "react";

// import pages
import Task from "./Task";
import StudyIntroduction from "./StudyIntroduction";
import PreTaskQuestionnaire from "./PreTaskQuestionnaire";
import TaskIntroduction from "./TaskIntroduction";
import PracticeTask from "./PracticeTask";
import PostTaskQuestionnaire from "./PostTaskQuestionnaire copy";

// import context
import PageContext from "../context/PageContext";

const App = () => {
  const [page, setPage] = useState(1);
  const value = { page, setPage };

  switch (page) {
    case 1:
      return (
        <PageContext.Provider value={value}>
          <StudyIntroduction />
        </PageContext.Provider>
      );
    case 2:
      return (
        <PageContext.Provider value={value}>
          <PreTaskQuestionnaire />
        </PageContext.Provider>
      );
    case 3:
      return (
        <PageContext.Provider value={value}>
          <TaskIntroduction />
        </PageContext.Provider>
      );
    case 4:
      return (
        <PageContext.Provider value={value}>
          <PracticeTask />
        </PageContext.Provider>
      );
    case 5:
      return (
        <PageContext.Provider value={value}>
          <Task />
        </PageContext.Provider>
      );
    case 6:
      return (
        <PageContext.Provider value={value}>
          <PostTaskQuestionnaire />
        </PageContext.Provider>
      );
  }
};

export default App;
