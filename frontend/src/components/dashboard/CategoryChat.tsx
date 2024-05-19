import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { useGetSearchProductsQuery } from "../../slices/productsApiSlice";

interface CategoryType {
  backgroundColor: string[];
  data: number[];
  datasets: any[s];
  labels: string[];
}

const DashboardCategoryDistribution = () => {
  const { data: productsData } = useGetSearchProductsQuery({});
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (productsData?.products) {
      const categories = productsData.products.map(
        (product) => product.category
      );
      const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});

      const categoryData: CategoryType = {
        labels: Object.keys(categoryCounts),
        datasets: [
          {
            label: "Category Distribution",
            data: Object.values(categoryCounts),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
      setChartData(categoryData);
    }
  }, [productsData]);

  return (
    <div className="p-4 rounded w-full h-[400px]">
      <Pie data={chartData} />
    </div>
  );
};

export default DashboardCategoryDistribution;
