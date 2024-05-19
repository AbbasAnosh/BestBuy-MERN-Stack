import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useGetSearchProductsQuery } from "../../slices/productsApiSlice";

const DashboardTopSellingProducts = () => {
  const { data: productsData } = useGetSearchProductsQuery({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (productsData?.products) {
      const labels = productsData.products.map((product) => product.name);
      const numReviews = productsData.products.map(
        (product) => product.numReviews
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Number of Reviews (as proxy for Sales)",
            data: numReviews,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [productsData]);

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DashboardTopSellingProducts;
