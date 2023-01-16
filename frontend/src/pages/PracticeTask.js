// import components
import TabGroup from "../components/TabGroup";
import TitleNav from "../components/TitleNav";
import ModalPracticeTaskIntroduction from "../components/ModalPracticeTaskIntroduction";

const PracticeTask = () => {
  return (
    <>
      <TitleNav pageTitle={"Practice Task"} />
      <ModalPracticeTaskIntroduction />
      <TabGroup />
    </>
  );
};

export default PracticeTask;
