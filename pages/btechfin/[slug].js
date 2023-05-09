import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "components/layout/Layout";
import BtechfinHeader from "components/BlogHeader";
import BtechfinBody from "components/BlogBody";
import MoreBtechfin from "components/MorePost";
import { getBtechfinBySlug, getMoreBtechfin, getAllBtechfinWithSlug } from "lib/index";
import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import slugify from "slugify";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: theme.spacing(9), // 추가: 내용과 흰색 배경 사이에 공간을 만듭니다
    margin: theme.spacing(10),
  },
  contentWrapper: {
    margin: "0 auto", // 가로 마진을 자동으로 설정하면, 화면 크기에 관계없이 중앙에 고정됩니다.
    maxWidth: "1450px", // 원하는 최대 너비 값을 설정하세요. 이 값에 따라 가로 폭이 제한됩니다.
    padding: theme.spacing(0, 0),
  },
}));

const generateSlug = (title = "") => {
  return slugify(title, {
    lower: true, // 소문자로 변환
    strict: true, // URL에 적합하지 않은 문자 제거
  });
};

export async function getStaticPaths() {
  const allBtechfin = await getAllBtechfinWithSlug();
  return {
    paths: allBtechfin.map((bTechFin) => `/bTechFin/${bTechFin.title}`),
    fallback: true,
  };
  
}

export async function getStaticProps({ params }) {
  const bTechFin = await getBtechfinBySlug(params.slug); // 수정
  const moreBtechfin = await getMoreBtechfin(params.slug); // 수정

  return {
    props: {
      bTechFin: bTechFin ? bTechFin : null,
      moreBtechfin: moreBtechfin ? moreBtechfin : null,
    },
    revalidate: 1,
  };
}

const Btechfin = ({ bTechFin, moreBtechfin }) => {
  const router = useRouter();
  const classes = useStyles();

  if (!router.isFallback && !bTechFin) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={bTechFin?.fields.title}
      description={bTechFin?.fields.subTitle}
      ogImage={bTechFin?.fields.cover.fields.file.url}
      url={`https://yourwebsite.com/bTechFin/${generateSlug(bTechFin?.fields.title)}`}
    >
      <div className={classes.contentWrapper}>
        <div className={classes.background}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Grid item>
                  <Link href="/posts/btechfin">
                    <a>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        style={{ fontSize: "13px" }}
                      >
                        언론
                      </Typography>
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography>-</Typography>
                </Grid>
                <Grid item>
                  <Link href="/posts/btechfin/b.gamefin">
                    <a>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        style={{ fontSize: "13px" }}
                      >
                        보도 자료
                      </Typography>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <BtechfinHeader
                title={bTechFin?.fields.title}
                subtitle={bTechFin?.fields.subTitle}
                slug={bTechFin?.fields.title}
                date={bTechFin?.fields.date}
              />
            </Grid>
          </Grid>
          <BtechfinBody
            content={bTechFin?.fields.content}
            coverImage={bTechFin?.fields.cover?.fields?.file?.url}
          />
          <Container maxWidth="lg" style={{ marginTop: "8em" }}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography
                  align="center"
                  gutterBottom
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                ></Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default Btechfin;
