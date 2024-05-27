import StarIcon from "@mui/icons-material/Star";

function Tag(props: { level: string }) {
  const tag =
    props.level === "begineer"
      ? "bg-[silver]"
      : props.level === "intermediate"
      ? "bg-[gold]"
      : props.level === "advanced"
      ? "bg-teal-100"
      : "bg-red-400";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full border flex justify-center items-center ${tag} `}
      >
        <StarIcon fontSize="small" />
      </div>
      <div className="w-2 h-4" style={{ backgroundColor: "#CCCCCC" }}></div>
    </div>
  );
}

export default Tag;
