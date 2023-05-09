import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "components/layout/Layout";
import InsightHeader from "components/BlogHeader";
import InsightBody from "components/BlogBody";
import MoreInsight from "components/MorePost";
import { getInsightBySlug, getMoreInsight, getAllInsightWithSlug } from "lib/index";
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
  const allInsight = await getAllInsightWithSlug();
  return {
    paths: allInsight.map((insight) => `/insight/${insight.title}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const insight = await getInsightBySlug(params.contentfulId); // 수정
  const moreInsight = await getMoreInsight(params.contentfulId); // 수정

  return {
    props: {
      insight: insight ? insight : null,
      moreInsight: moreInsight ? moreInsight : null,
    },
    revalidate: 1,
  };
}

const Insight = ({ insight, moreInsight }) => {
  const router = useRouter();
  const classes = useStyles();

  if (!router.isFallback && !insight) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={insight?.fields.title}
      description={insight?.fields.subTitle}
      ogImage={insight?.fields.cover.fields.file.url}
      url={`https://yourwebsite.com/insight/${generateSlug(insight?.fields.title)}`}
    >
      <div className={classes.contentWrapper}>
        <div className={classes.background}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Grid item>
                  <Link href="/posts/insight">
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
                  <Link href="/posts/insight/report">
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
              <InsightHeader
                title={insight?.fields.title}
                subtitle={insight?.fields.subTitle}
                slug={insight?.fields.title}
                date={insight?.fields.date}
              />
            </Grid>
          </Grid>
          <InsightBody
            content={insight?.fields.content}
            coverImage={insight?.fields.cover?.fields?.file?.url}
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

export default Insight;
