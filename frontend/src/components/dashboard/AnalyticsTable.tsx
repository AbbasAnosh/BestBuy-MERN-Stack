import DashboardRoundedBarGraph from "./Bargraph";
import DashboardCategoryDistribution from "./CategoryChat";
import DashboardTopSellingProducts from "./ChartTable";
import DashboardLineChart from "./LineChat";

const Dashboard = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-2">
        <DashboardRoundedBarGraph />
      </div>
      <div className="col-span-1 md:col-span-2 flex">
        <div className="flex-1 mr-2">
          <DashboardTopSellingProducts />
        </div>
        <div className="flex-1 ml-2">
          <DashboardCategoryDistribution />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2">
        <DashboardLineChart />
      </div>
    </div>
  );
};

export default Dashboard;
