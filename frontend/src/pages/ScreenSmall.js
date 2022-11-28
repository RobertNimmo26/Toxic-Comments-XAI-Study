import Container from "react-bootstrap/Container";

const ScreenSize = () => {
  return (
    <>
      <Container>
        <h1 styles={{ textAlign: "center" }}>
          Your screen width is too small for this study.
        </h1>
        <h5>
          Please make sure you are taking this study on a device with a large
          screen (desktop/laptop/tablet). If you are completing the study on a
          device in portrait mode, turn your device around to landscape.
        </h5>
      </Container>
    </>
  );
};

export default ScreenSize;
