import DashboardHead from "../../components/Dashboard/DashboardHead";
import DashboardSection from "../../components/Dashboard/DashboardSection";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";

function index() {
  return (
    <div className="pt-4 flex">
      <DashboardHead />
      <DashboardSection />
      <DashboardFooter />
    </div>
  );
}

export default index;
