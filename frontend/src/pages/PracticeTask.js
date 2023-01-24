// import components
import TabGroup from "../components/TabGroup";
import TitleNav from "../components/TitleNav";
import ModalPracticeTaskIntroduction from "../components/ModalPracticeTaskIntroduction";
import ModalPrototypeInstructions from "../components/ModalPrototypeInstructions";

const PracticeTask = () => {
  return (
    <>
      <TitleNav pageTitle={"Practice Task"} />
      <ModalPracticeTaskIntroduction />
      <ModalPrototypeInstructions />
      <TabGroup />
    </>
  );
};

export default PracticeTask;
