import "./common.css";

interface InfoCardType {
  item: string[];
}

function InfoCard(props: InfoCardType) {
  const { item }: any = props;
  return (
    <div className="w-full text-end text-sm md:text-base info__card max-h-fit relative p-1 pr-4">
      {item[1]}
      <span className="triangle">{item[0]}</span>
    </div>
  );
}

export default InfoCard;
