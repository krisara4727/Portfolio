import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container(props: ContainerProps) {
  return (
    <div className="flex flex-wrap gap-2 container__box p-2 w-full">
      {props.children}
    </div>
  );
}

export default Container;
