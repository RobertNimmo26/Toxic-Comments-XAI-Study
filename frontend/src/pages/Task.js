// import react components
import { useState } from "react";

// import components
import TabGroup from "../components/TabGroup";
import TitleNav from "../components/TitleNav";
import ModalPrototypeInstructions from "../components/ModalPrototypeInstructions";

// import context
import ExpiryTimestampContext from "../context/ExpiryTimestampContext";

const Task = () => {
  const timeTemp = new Date();
  timeTemp.setSeconds(timeTemp.getSeconds() + 1200); // timer
  const [time] = useState(timeTemp);

  return (
    <>
      <TitleNav pageTitle={"Task"} />
      <ModalPrototypeInstructions />
      <ExpiryTimestampContext.Provider value={time}>
        <TabGroup />
      </ExpiryTimestampContext.Provider>
    </>
  );
};

export default Task;
