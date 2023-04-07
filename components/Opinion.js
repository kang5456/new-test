import React from "react";
import Layout from "components/layout/Layout";
import Press from "components/Press";
import MorePress from "components/MorePost";
import styles from "./Opinion.module.css"; // CSS 모듈을 가져옵니다.
import TitleSection from "./TitleSection"; // TitleSection 컴포넌트를 가져옵니다.
import { Container, Grid, Typography } from "@material-ui/core";
import { getAllPress } from "lib/index";

const Opinion = () => {
  const press = []; // 게시물 목록을 저장하는 배열

  return (
    <div>
      <TitleSection title="오피니언" />
      {press.length === 0 ? (
        <div className={styles.noPressContainer}>
          <img
            className={styles.noPressImage}
            src="/empty-folder.svg"
            alt="No press"
          />
          <div className={styles.noPressText}>게시물이 없습니다.</div>
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
