import React from "react";
import { SeperatorProps } from "../../types/commonTypes";

function Seperator(props: SeperatorProps) {
  return (
    <div
      className={`border ${props.classNames && props.classNames}`}
      style={{
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
}

export default Seperator;
