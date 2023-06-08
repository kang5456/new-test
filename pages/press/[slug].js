import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "components/layout/Layout";
import PressHeader from "components/BlogHeader";
import PressBody from "components/BlogBody";
import MorePress from "components/MorePost";
import { getPressBySlug, getMorePress, getAllPressWithSlug } from "lib/index";
import { Container, Grid, Typography, Box } from "@material-ui/core";
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
  const allPress = await getAllPressWithSlug();
  return {
    paths: allPress.map((press) => `/press/${press.title}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const press = await getPressBySlug(params.slug); // 수정
  const morePress = await getMorePress(params.slug); // 수정

  return {
    props: {
      press: press ? press : null,
      morePress: morePress ? morePress : null,
    },
    revalidate: 1,
  };
}

const Press = ({ press, morePress }) => {
  const router = useRouter();
  const classes = useStyles();

  if (!router.isFallback && !press) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={press?.fields.title}
      description={press?.fields.subTitle}
      ogImage={press?.fields.cover?.fields.file.url || 'default_image_url'}
      url={`https://yourwebsite.com/press/${generateSlug(press?.fields.title)}`}
    >
      <div className={classes.contentWrapper}>
        <div className={classes.background}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Grid item>
                  <Link href="/posts/press">
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
                  <Link href="/posts/press/release">
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
              <PressHeader
                title={press?.fields.title}
                subtitle={press?.fields.subTitle}
                slug={press?.fields.title}
                date={press?.fields.date}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center">
          <PressBody
            content={press?.fields.content}
            coverImage={press?.fields.cover?.fields?.file?.url}
          />
          </Grid>
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

export default Press;