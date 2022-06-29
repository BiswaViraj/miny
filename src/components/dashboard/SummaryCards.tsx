import {
  Box,
  Card,
  CardProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { fNumber, fPercent } from "../../utils/formatNumber";
import LineChart from "../Chart/LineChart";
import { capitalCase } from "change-case";

type Props = CardProps & {
  title: string;
  chartData: number[];
  total: number;
};

const SummaryCards = ({ chartData, title, total }: Props) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: (theme) => theme.spacing(2),
        maxHeight: 180,
        height: 180,
      }}
    >
      <Box>
        <Stack direction={"row"} spacing={1} alignItems="center">
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography variant="body2">{capitalCase(title)}</Typography>

            <Typography variant="h3" color="primary">
              {fNumber(total)}
            </Typography>
          </Box>
          <Box>
            <LineChart
              categories={["a", "b", "c", "d", "e"]}
              series={[
                {
                  data: chartData,
                  name: "test",
                },
              ]}
            />
          </Box>
        </Stack>
        <Divider />
        <Typography mt={2}>12% more than last week</Typography>
      </Box>
    </Card>
  );
};

export default SummaryCards;
