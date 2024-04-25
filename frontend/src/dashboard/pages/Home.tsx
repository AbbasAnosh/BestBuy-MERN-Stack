import BarChartBox from "../components/BarChartBox";
import BigChartBox from "../components/BigChartBox";
import ChartBox from "../components/ChartBox";
import PieChartBox from "../components/PieChartBox";
import TopBox from "../components/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../data";

const DashboardHome = () => {
  return (
    <div className="grid gap-[16px] grid-cols-4 auto-rows-minmax grid-flow-dense">
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-1 row-span-3">
        <PieChartBox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg col-span-2 row-span-2">
        <BigChartBox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-soft-bg">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default DashboardHome;
