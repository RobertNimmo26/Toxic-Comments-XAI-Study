// import react components
import { useState, useEffect } from "react";

// import pages
import Task from "./pages/Task";
import StudyIntroduction from "./pages/StudyIntroduction";
import PreTaskQuestionnaire from "./pages/PreTaskQuestionnaire";
import TaskIntroduction from "./pages/TaskIntroduction";
import PracticeTask from "./pages/PracticeTask";
import PostTaskQuestionnaire from "./pages/PostTaskQuestionnaire copy";
import ScreenSize from "./pages/ScreenSmall";

// import context
import PageContext from "./context/PageContext";

const App = () => {
  const [page, setPage] = useState(1);
  const [screenSize, setScreenSize] = useState(0);

  const value = { page, setPage };

  useEffect(() => {
    const interval = setInterval(() => {
      const w = window.innerWidth;

      if (w < 1000) {
        setScreenSize(1);
      } else {
        setScreenSize(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (screenSize === 1) {
    return <ScreenSize />;
  }

  switch (page) {
    case 1:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <StudyIntroduction />
        </PageContext.Provider>
      );
    case 2:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <PreTaskQuestionnaire />
        </PageContext.Provider>
      );
    case 3:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <TaskIntroduction />
        </PageContext.Provider>
      );
    case 4:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <PracticeTask />
        </PageContext.Provider>
      );
    case 5:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <Task />
        </PageContext.Provider>
      );
    case 6:
      window.scrollTo(0, 0);
      return (
        <PageContext.Provider value={value}>
          <PostTaskQuestionnaire />
        </PageContext.Provider>
      );
  }
};

export default App;
