// import react components
import { useEffect } from "react";

// import axios
import axios from "axios";

// import bootstrap components
import Container from "react-bootstrap/Container";

const Redirect = ({ content }) => {
  console.log(content);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "MongoDB-Database": process.env.REACT_APP_MONGODB_DATABASE,
      },
    };

    const url = process.env.REACT_APP_WORKERS_ENDPOINT;

    console.log(url);
    axios
      .post(url, content, config)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.replace("https://google.com");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There has been an issue saving your results. Please contact robert.nimmo@glasgow.ac.uk for advice."
        );
      });
  }, []);

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
        <h1>Do NOT close browser otherwise results will not be saved.</h1>

        <br />
        <br />
        <h2>This is the end of the study.</h2>
        <br />
        <p style={{ fontSize: "20px" }}>
          Thank you for taking the time to complete the study. You will be
          automatically redirected back to Prolific. If you have had any issues
          please contact robert.nimmo@glasgow.ac.uk
        </p>
      </Container>
    </>
  );
};

export default Redirect;
