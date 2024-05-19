import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useGetSearchProductsQuery } from "../../slices/productsApiSlice";

interface DatasetProps {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
}

const DashboardLineChart = () => {
  const { data: productsData } = useGetSearchProductsQuery({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (productsData?.products) {
      const labels = productsData.products.map((product) => product.name);
      const prices = productsData.products.map((product) => product.price);

      setChartData({
        labels,
        datasets: [
          {
            label: "Prices Over Time",
            data: prices,
            fill: false,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
    }
  }, [productsData]);

  return (
    <div className="p-4 rounded">
      <Line data={chartData} />
    </div>
  );
};

export default DashboardLineChart;
