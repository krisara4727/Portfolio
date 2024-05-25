import React, { useEffect, useRef } from "react";
import "./common.css";

function ProgressBar(props: { min: number; max: number; value: number }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const percentage = (props.value / 5) * 100;
      ref.current.style.background = `linear-gradient(to right, #B19CD9 ${percentage}%, #CCCCCC ${percentage}%)`;
    }
  }, []);
  return (
    <input
      type="range"
      ref={ref}
      readOnly
      value={Number(props.value) * 2}
      min={props.min}
      max={props.max}
      className="w-full custom__range"
    />
  );
}

export default ProgressBar;
