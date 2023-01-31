// import bootstrap components
import Container from "react-bootstrap/Container";

const ProlificIdNotPresent = () => {
  return (
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
      <h3>Prolific ID is not present</h3>
      <p>
        Your Prolific ID is not present in the URL. Please disable any browser
        extension which could be interfering, such as adblockers, and try again
        by accesing the study using the URL provided on Prolific.
        <br />
        <br />
        If you continue having issues, please contact the Principal Investigator
        Robert Nimmo,{" "}
        <a href="mailto:Robert.Nimmo@glasgow.ac.uk">
          Robert.Nimmo@glasgow.ac.uk
        </a>
      </p>
    </Container>
  );
};

export default ProlificIdNotPresent;
