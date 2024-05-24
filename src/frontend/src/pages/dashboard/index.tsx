import DashboardHead from "../../components/Dashboard/DashboardHead";
import DashboardSection from "../../components/Dashboard/DashboardSection";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";

function index() {
  return (
    <div className="pt-2 md:pt-4 w-full h-full flex flex-col">
      <DashboardHead />
      <DashboardSection />
      <DashboardFooter />
    </div>
  );
}

export default index;
