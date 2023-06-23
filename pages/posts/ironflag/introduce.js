import React from "react";
import Layout from "components/layout/Layout";
import PlanCard from "components/IronFlag/PlanCard";
import TeamIntro from "components/IronFlag/TeamInfo";
import BusinessSection from "components/IronFlag/BusinessSection";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Partners from "components/IronFlag/Partners";
import AboutSection from "components/IronFlag/AboutSection";
import HiringSection from "components/IronFlag/HiringSection";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#F2F2F2",
  },
  contentWrapper: {
    margin: "0 auto", // 가로 마진을 자동으로 설정하면, 화면 크기에 관계없이 중앙에 고정됩니다.
    maxWidth: "1280px", // 원하는 최대 너비 값을 설정하세요. 이 값에 따라 가로 폭이 제한됩니다.
    padding: theme.spacing(4, 0),
  },
}));

const introduce = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.background}>
        <div className={classes.contentWrapper}>
          <PlanCard />
          <TeamIntro />
          <BusinessSection />
          <Partners/>
          <AboutSection />
          <HiringSection />
        </div>
      </div>
    </Layout>
  );
};

export default introduce;
