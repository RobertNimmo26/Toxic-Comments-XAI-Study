// import react components
import { useState } from "react";

// import components
import TabGroup from "../components/TabGroup";
import TitleNav from "../components/TitleNav";

// import comments
import comments from "../config/tempData";

// import context
import ExpiryTimestampContext from "../context/ExpiryTimestampContext";

const Task = () => {
  const timeTemp = new Date();
  timeTemp.setSeconds(timeTemp.getSeconds() + 15); // 10 minutes timer
  const [time, setTime] = useState(timeTemp);

  return (
    <>
      <TitleNav pageTitle={"Task"} />
      <ExpiryTimestampContext.Provider value={time}>
        <TabGroup comments={comments} />
      </ExpiryTimestampContext.Provider>
    </>
  );
};

export default Task;
