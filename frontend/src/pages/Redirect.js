// import bootstrap components
import Container from "react-bootstrap/Container";

const Redirect = () => {
  return (
    <>
      <Container
        fluid="sm"
        style={{
          height: "100vh",
          flexDirection: "column",

          display: "flex",
          textAlign: "center",
          alignItems: "center" /* Vertical center alignment */,
          justifyContent: "center" /* Horizontal center alignment */,
        }}
      >
        <h2>This is the end of the study</h2>
        <br />
        <p style={{ fontSize: "20px" }}>
          Thank you for taking the time to complete the study. You will be now
          redirected back to Prolific. If you have had any issues please contact
          robert.nimmo@glasgow.ac.uk
        </p>
      </Container>
    </>
  );
};

export default Redirect;
