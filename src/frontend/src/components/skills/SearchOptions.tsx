import React from "react";

function SearchOptions(props: { item: string; index: number }) {
  const item = props.item;
  const index = props.index;
  return (
    <p
      key={item}
      className={`${
        index === 0 && "font-medium underline underline-offset-8 text-blue-600"
      } px-1`}
    >
      {item}
    </p>
  );
}

export default SearchOptions;
