// import components
import SideBar from "./SideBar";
import TabContent from "./TabContent";

// import bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const TabGroup = ({ comments }) => {
  return (
    <>
      <Tab.Container
        defaultActiveKey="1"
        mountOnEnter="true"
        unmountOnExit="true"
      >
        <Row>
          <Col md={3}>
            <div class="align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
              <span class="fs-5 fw-semibold">Comments to review</span>
            </div>
            <SideBar comments={comments} />
          </Col>

          <Col md={9}>
            <Tab.Content>
              {comments.map((x, i) => (
                <Tab.Pane eventKey={x.id}>
                  <TabContent comment={x} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default TabGroup;
