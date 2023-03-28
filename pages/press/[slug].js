import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import PressHeader from "components/BlogHeader";
import PressBody from "components/BlogBody";
import MorePress from "components/MorePost";

import { getPressBySlug, getMorePress, getAllPressWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
  const allPress = await getAllPressWithSlug();
  return {
    paths: allPress.map((press) => `/press/${press.slug}`),
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

  if (!router.isFallback && !press) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={press?.fields.title}
      description={press?.fields.subTitle}
      ogImage={press?.fields.cover.fields.file.url}
      url={`https://yourwebsite.com/press/${press?.fields.title}`}
    >
    <PressHeader
      title={press?.fields.title}
      subtitle={press?.fields.subTitle}
      authorName={press?.fields.author}
      authorImage={press?.fields.authorImage?.fields?.file?.url}
      slug={press?.fields.title}
      date={press?.fields.date}
      coverImage={press?.fields.cover?.fields?.file?.url}
    />
      <PressBody content={press?.fields.content} />
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
            >
            </Typography>
          </Grid>
        </Grid>
        <Typography
          align="center"
          gutterBottom
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "3em 0 1.5em",
            borderBottom: "2px solid rgb(208 208 208)",
          }}
        >
          - Recent Entries -
        </Typography>
        <Grid container spacing={4} justify="center">
          {morePress?.map(({ fields }) => (
            <Grid item key={fields.title} xs={12} md={4}>
              <Grid container>
                <MorePress
                  title={fields.title} // 수정
                  subtitle={fields.subTitle} // 수정
                  authorName={fields.author?.name} // 수정
                  authorImage={fields.author?.image?.fields?.file?.url} // 수정
                  slug={fields.slug} // 수정
                  date={fields.date} // 수정
                  coverImage={fields.cover.fields.file.url} // 수정
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Press;
