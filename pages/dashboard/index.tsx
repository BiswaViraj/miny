import {
  Alert,
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PieChart from "../../src/components/Chart/PieChart";
import SummaryCards from "../../src/components/dashboard/SummaryCards";
import URLInput from "../../src/components/urlInput/URLInput";
import useAuth from "../../src/hooks/useAuth";
import Layout from "../../src/layout";
import { privateAxiosInstance } from "../../src/utils/axios";
import { BASE_ENPOINTS } from "../../src/utils/constant";
import { NextPageWithLayout } from "../_app";

type ServerProps = {
  urls: string[];
  isError: boolean;
};

type Props = ServerProps;

const DashBoard: NextPageWithLayout = () => {
  const { user } = useAuth();
  const [urls, setUrls] = React.useState([]);
  const [analytics, setAnalytics] = React.useState([]);

  React.useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await privateAxiosInstance.get(`${BASE_ENPOINTS.url}`);
        setUrls(res.data.urls);
      } catch (error) {}
    };
    fetchUrls();
  }, []);

  React.useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await privateAxiosInstance.get(BASE_ENPOINTS.analytic);

        setAnalytics(res.data.analytics);
      } catch (error) {
        console.error(error);
      }
    };
  });

  // if (isError)
  //   return (
  //     <Container>
  //       <Paper
  //         sx={{
  //           padding: 4,
  //           mt: 3,
  //         }}
  //       >
  //         <Alert severity="error" variant="outlined">
  //           Something went wrong!
  //         </Alert>
  //       </Paper>
  //     </Container>
  //   );
  return (
    <Container>
      <Box mt={4}>
        <Stack spacing={3}>
          <Box>
            <Grid container spacing={3}>
              <Grid item md={3} xs={6}>
                <SummaryCards
                  title="Total urls"
                  chartData={[1, 2, 3]}
                  total={urls.length}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <SummaryCards
                  title="total visits"
                  chartData={[5, 7, 9, 2, 10]}
                  total={analytics.length}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <SummaryCards
                  title="random 1"
                  chartData={[1, 2, 3]}
                  total={8000}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <SummaryCards
                  title="random 2"
                  chartData={[1, 2, 3]}
                  total={8000}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Card
                  sx={{
                    padding: 3,
                  }}
                >
                  <URLInput />
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <PieChart
                  chartData={[
                    {
                      label: "Mobile",
                      value: 5,
                    },
                    {
                      label: "Desktop",
                      value: 3,
                    },
                    {
                      label: "Other",
                      value: 2,
                    },
                  ]}
                  title="Device Types"
                />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

DashBoard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="dashboard">{page}</Layout>;
};

export default DashBoard;
