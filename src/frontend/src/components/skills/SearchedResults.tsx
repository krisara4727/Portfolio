import React from "react";

function SearchedResults({ item }) {
  return (
    <p
      key={item}
      className="capitalize py-2 px-4 border border-gray-500 rounded-3xl whitespace-nowrap"
    >
      {item}
    </p>
  );
}

export default SearchedResults;
