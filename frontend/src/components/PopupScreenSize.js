// import react components
import { useState, useEffect } from "react";

// import window-size
import { useWindowWidth } from "@react-hook/window-size/throttled";

// import bootstrap components
import Modal from "react-bootstrap/Modal";

const PopupScreenSize = () => {
  const [screenWidthPopup, setScreenWidthPopup] = useState(false);

  const browserWidth = useWindowWidth();

  useEffect(() => {
    if (browserWidth < 970) {
      setScreenWidthPopup(true);
    } else {
      setScreenWidthPopup(false);
    }
  }, [browserWidth]);

  if (screenWidthPopup) {
    return (
      <>
        <Modal
          show={screenWidthPopup}
          fullscreen={true}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body>
            <h3>
              Your browsers display width is currently too small to complete the
              study. Please make sure your browser is in full screen.
            </h3>
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    <></>;
  }
};

export default PopupScreenSize;
