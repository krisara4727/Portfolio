function SearchedResults(props: { item: any }) {
  return (
    <p
      key={props.item}
      className="capitalize py-2 px-4 border border-gray-500 rounded-3xl whitespace-nowrap"
    >
      {props.item}
    </p>
  );
}

export default SearchedResults;
