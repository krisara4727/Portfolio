import React from "react";
import { SeperatorProps } from "../../types/commonTypes";

function Seperator(props: SeperatorProps) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
    ></div>
  );
}

export default Seperator;
