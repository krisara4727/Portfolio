import { headerScrollingText } from "../../constants/dashboard";

function DashboardHead() {
  return (
    <div className="floating__header">
      <span className="tracking-wide font-medium">{headerScrollingText}</span>
    </div>
  );
}

export default DashboardHead;
