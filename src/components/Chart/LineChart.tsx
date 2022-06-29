import React from "react";
import { ReactApexChart } from "./ReactApexCharts";

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
};

const LineChart = ({ categories, series }: Props) => {
  return (
    <ReactApexChart
      type="line"
      series={series}
      options={{
        chart: {
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      }}
    />
  );
};

export default LineChart;
