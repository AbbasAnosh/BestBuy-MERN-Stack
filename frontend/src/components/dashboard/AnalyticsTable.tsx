import DashboardRoundedBarGraph from "./Bargraph";
import DashboardCategoryDistribution from "./CategoryChat";
import DashboardLineChart from "./LineChat";

const Dashboard = () => {
  return (
    <div className="grid gap-[16px] grid-cols-4 auto-rows-minmax grid-flow-dense p-4">
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-4 row-span-2">
        {" "}
        <DashboardRoundedBarGraph />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-2 row-span-2">
        <DashboardCategoryDistribution />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-2 row-span-2">
        <DashboardLineChart />
      </div>
    </div>
  );
};

export default Dashboard;
