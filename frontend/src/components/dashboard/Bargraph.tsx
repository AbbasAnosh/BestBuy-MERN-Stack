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

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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

      setChartData({
        labels,
        datasets: [
          {
            label: "Ratings",
            data: ratings,
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
            borderRadius: 10, // Adding border radius
            barPercentage: 0.5, // Adjust bar width
            categoryPercentage: 0.5, // Adjust space between bars
          },
          {
            label: "Prices",
            data: prices,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            borderRadius: 10, // Adding border radius
            barPercentage: 0.5, // Adjust bar width
            categoryPercentage: 0.5, // Adjust space between bars
          },
        ],
      });
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
    <div className="p-4 bg-white rounded shadow-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DashboardRoundedBarGraph;
