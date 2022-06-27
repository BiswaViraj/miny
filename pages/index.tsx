import * as React from "react";
import Container from "@mui/material/Container";
import Layout from "../src/layout";
import type { NextPageWithLayout } from "./_app";
import { HeroSection } from "../src/sections/main";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default Home;
