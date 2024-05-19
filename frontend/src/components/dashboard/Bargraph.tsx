import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useGetSearchProductsQuery } from "../../slices/productsApiSlice";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { ResponsiveContainer } from "recharts";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    barPercentage: number;
    categoryPercentage: number;
  }[];
};

const DashboardRoundedBarGraph = () => {
  const { data: productsData } = useGetSearchProductsQuery({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (productsData?.products) {
      const labels = productsData.products.map((product) => product.name);
      const ratings = productsData.products.map((product) => product.rating);
      const prices = productsData.products.map((product) => product.price);

      const chartData: ChartData = {
        labels,
        datasets: [
          {
            label: "Ratings",
            data: ratings,
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
            borderRadius: 10,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
          {
            label: "Prices",
            data: prices,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            borderRadius: 10,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
        ],
      };
      setChartData(chartData);
    }
  }, [productsData]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 rounded w-full h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DashboardRoundedBarGraph;
