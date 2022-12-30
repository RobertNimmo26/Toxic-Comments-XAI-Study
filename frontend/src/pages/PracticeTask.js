// import react components
import { useContext } from "react";

// import components
import TabGroup from "../components/TabGroup";
import TitleNav from "../components/TitleNav";

// import bootstrap components
import Button from "react-bootstrap/Button";

// import context
import PageContext from "../context/PageContext";

const PracticeTask = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <TitleNav pageTitle={"Practice Task"} />
      <TabGroup />
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          setPage(5);
        }}
      >
        Move to next page
      </Button>
    </>
  );
};

export default PracticeTask;
