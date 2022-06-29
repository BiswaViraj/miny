import { Card, CardHeader, CardProps, styled } from "@mui/material";
import { fNumber } from "../../utils/formatNumber";
import { ReactApexChart } from "./ReactApexCharts";

const CHART_HEIGHT = 295;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
}));

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chartData: {
    label: string;
    value: number;
  }[];
  chartColors?: string[];
}

export default function PieChart({
  title,
  subheader,
  chartData,
  chartColors,
  ...other
}: Props) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = {
    labels: chartLabels,
    legend: { show: false },
    plotOptions: {
      chart: {
        foreColor: "rgb(255,0,0)",
      },

      pie: {
        donut: {
          size: "90%",
          labels: {
            value: {
              formatter: (val: number | string) => fNumber(val),
            },
            total: {
              formatter: (w: { globals: { seriesTotals: number[] } }) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return fNumber(sum);
              },
            },
          },
        },
      },
    },
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="donut"
          series={chartSeries}
          options={chartOptions}
          height={280}
        />
      </ChartWrapperStyle>
    </Card>
  );
}
