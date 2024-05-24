import React from "react";
import "./common.css";

interface SubHeadingTypes {
  personalInfo: string;
}

function SubHeading(props: SubHeadingTypes) {
  return (
    <React.Fragment>
      <h3 className="max-w-fit text-xl font-rubik relative personal__info">
        {props.personalInfo}
      </h3>
    </React.Fragment>
  );
}

export default SubHeading;
