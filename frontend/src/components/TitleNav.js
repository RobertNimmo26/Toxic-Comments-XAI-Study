// import bootstrap components
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

const TitleNav = ({ pageTitle }) => {
  const pages = [
    "Study Introduction",
    "Pre-task Questionnaire",
    "Task Introduction",
    "Practice Task",
    "Task",
    "Post-task Questionnaire",
  ];

  return (
    <>
      <Container
        fluid="xxl"
        style={{
          padding: "15px 15px 20px 15px",
        }}
      >
        <Stack direction="horizontal" gap={3}>
          <div>
            <h3>
              <strong>{pageTitle}</strong>
            </h3>
          </div>
          <div className="ms-auto">
            <Breadcrumb>
              {pages.map((x, i) =>
                pageTitle === x ? (
                  <Breadcrumb.Item active style={{ color: "#006BF4" }}>
                    {x}
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item active>{x}</Breadcrumb.Item>
                )
              )}
            </Breadcrumb>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default TitleNav;
