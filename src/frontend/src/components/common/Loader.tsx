import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="spinner gap-1 w-full h-full flex relative justify-center items-center">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Loader;
