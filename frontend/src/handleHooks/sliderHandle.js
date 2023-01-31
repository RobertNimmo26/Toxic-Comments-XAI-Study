// Based on the example code provided on rc-slider docs
// => https://slider-react-component.vercel.app/demo/handle

import { useRef, useEffect } from "react";
import "rc-tooltip/assets/bootstrap.css";
import raf from "rc-util/lib/raf";
import Tooltip from "rc-tooltip";

const HandleTooltip = (props) => {
  const {
    value,
    children,
    visible,
    tipFormatter = (val) => `${val} %`,
    ...restProps
  } = props;

  const tooltipRef = useRef();
  const rafRef = useRef(null);

  const cancelKeepAlign = () => {
    raf.cancel(rafRef.current);
  };

  const keepAlign = () => {
    rafRef.current = raf(() => {
      let _a;
      (_a = tooltipRef.current) === null || _a === void 0
        ? void 0
        : _a.forcePopupAlign();
    });
  };

  useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      placement="top"
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: "auto" }}
      ref={tooltipRef}
      visible={visible}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export const sliderHandleRender = (node, props) => {
  return (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  );
};
