// import react components
import { useContext } from "react";

// import components
import SideBar from "./SideBar";
import TabContent from "./TabContent";
import ModalCheckedEndTask from "./ModalCheckedEndTask";

// import bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// import context
import ExplanationDataContext from "../context/ExplanationDataContext";

const TabGroup = () => {
  const { explanationData } = useContext(ExplanationDataContext);

  return (
    <>
      <Tab.Container mountOnEnter="true" defaultActiveKey="1">
        <Row>
          <Col md={3}>
            <div className="align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
              <h5 className="fs-5 ">Comments to review</h5>
            </div>
            <SideBar />
          </Col>

          <Col md={9}>
            <ModalCheckedEndTask />
            <Tab.Content>
              {explanationData.reset.map((_x, i) => {
                return (
                  <>
                    <Tab.Pane eventKey={i + 1}>
                      <TabContent explanationDataIndex={i} />
                    </Tab.Pane>
                  </>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default TabGroup;
