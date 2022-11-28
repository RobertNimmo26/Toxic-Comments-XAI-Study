import Container from "react-bootstrap/Container";

const ScreenSize = () => {
  return (
    <>
      <Container>
        <h1>Your screen width is too small for this study.</h1>
        <h5>
          Please make sure you are taking this study on a device with a large
          screen (desktop/laptop). If you are completing the study on a device
          in portrait mode or on a small browser window, turn your device around
          to landscape or resize your browser window.
        </h5>
      </Container>
    </>
  );
};

export default ScreenSize;
