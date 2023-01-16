// import react components
import { useEffect } from "react";

// import axios
import axios from "axios";

// import bootstrap components
import Container from "react-bootstrap/Container";

const exportToJson = (content) => {
  let filename = "xai_study_results.json";
  let contentType = "application/json;charset=utf-8;";
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob(
      [decodeURIComponent(encodeURI(JSON.stringify(content)))],
      { type: contentType }
    );
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var a = document.createElement("a");
    a.download = filename;
    a.href =
      "data:" + contentType + "," + encodeURIComponent(JSON.stringify(content));
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

const Redirect = ({ content }) => {
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "MongoDB-Database": process.env.REACT_APP_MONGODB_DATABASE,
      },
    };

    const url = process.env.REACT_APP_WORKERS_ENDPOINT;

    axios
      .post(url, content, config)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          if (process.env.REACT_APP_ENVIRONMENT == "Production") {
            // During production redirect to Prolific
            window.location.replace(
              "https://app.prolific.co/submissions/complete?cc=C156XLP8"
            );
          } else {
            // During testing/development download results to client and redirect to Google
            exportToJson(content);
            window.location.replace("https://google.com");
          }
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        exportToJson(content);

        alert(
          "There has been an issue saving your results. Please contact robert.nimmo@glasgow.ac.uk for advice and keep downloaded file (xai_study_results.json) saved."
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
