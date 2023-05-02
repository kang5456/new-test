import React from "react";
import Layout from "components/layout/Layout";
import Press from "components/Press";
import MorePress from "components/MorePost";
import styles from "./Opinion.module.css"; // CSS 모듈을 가져옵니다.
import TitleSection from "./TitleSection"; // TitleSection 컴포넌트를 가져옵니다.
import { Container, Grid, Typography } from "@material-ui/core";
import { getAllPress } from "lib/index";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customText: {
  color: "#c1c1c1", // 원하는 색상 코드를 입력하세요.
  },
}));

const Opinion = () => {
  const press = []; // 게시물 목록을 저장하는 배열
    const classes = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          component="h1"
          align="left"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          오피니언
        </Typography>
      </Grid>
      {press.length === 0 ? (
        <div className={styles.noPressContainer}>
          <div style={{ display: "inline-block", padding: "5px", borderRadius: "4px" }}>
            <img className={styles.noPressImage} src="/empty-folder.svg" alt="No press"/>
          </div>
            <Typography variant="subtitle2" align="center" gutterBottom className={classes.customText}>
              게시물이 없습니다.
            </Typography>
        </div>
      ) : (
        press.map((press) => (
          // 게시물이 있을 경우 게시물을 렌더링
          <div key={press.id}>
            <h3>{press.title}</h3>
            <p>{press.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Opinion;
