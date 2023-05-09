import React from "react";
import Layout from "components/layout/Layout";
import Insight from 'components/Insight';
import styles from "./Opinion.module.css"; // CSS 모듈을 가져옵니다.
import { Container, Grid, Typography } from "@material-ui/core";
import { getAllInsight } from "lib/index";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customText: {
  color: "#c1c1c1", // 원하는 색상 코드를 입력하세요.
  },
}));

export async function getStaticProps() {
  const insights = await getAllInsight();
  const opinions = insights.filter(insight => insight.fields.type === "opinion");
  return { props: { opinions }, revalidate: 1 };
}

const Opinion = ({ opinions }) => {
    const classes = useStyles();
 
  return (
    <div>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          component="h1"
          align="left"
          gutterBottom
          style={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          오피니언
        </Typography>
      </Grid>
      {opinions && opinions.length === 0 ? (
        <div className={styles.noPressContainer}>
          <div style={{ display: "inline-block", padding: "5px", borderRadius: "4px" }}>
            <img className={styles.noPressImage} src="/empty-folder.svg" alt="No press"/>
          </div>
            <Typography variant="subtitle2" align="center" gutterBottom className={classes.customText}>
              게시물이 없습니다.
            </Typography>
        </div>
      ) : (
        <Grid container spacing={4}>
          {opinions?.map(({ fields, sys }) => (
            <Grid item key={fields.slug} xs={12}>
              <Insight
                title={fields.title}
                type="opinion"
                coverImage={fields.cover?.fields?.file?.url}
                author={fields.author}
                content={fields.content}
                order={fields.order}
                slug={fields.title}
                createdAt={sys.createdAt}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Opinion;
