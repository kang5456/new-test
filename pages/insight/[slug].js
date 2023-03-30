import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import InsightHeader from "components/BlogHeader";
import InsightBody from "components/BlogBody";
import MoreInsight from "components/MorePost";

import { getInsightBySlug, getMoreInsight, getAllInsightWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
    const allInsight = await getAllInsightWithSlug();
    return {
      paths: allInsight.map((insight) => `/insight/${insight.slug}`),
      fallback: true,
    };
  }

export async function getStaticProps({ params }) {
    const insight = await getInsightBySlug(params.slug); // 수정
    const moreInsight = await getMoreInsight(params.slug); // 수정
    
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
  
    if (!router.isFallback && !insight) {
      return <ErrorPage statusCode={404} />;
    }
  
    return (
      <Layout
        title={insight?.fields.title}
        description={insight?.fields.subTitle}
        ogImage={insight?.fields.cover.fields.file.url}
        url={`https://yourwebsite.com/insight/${insight?.fields.title}`}
      >
      <InsightHeader
        title={insight?.fields.title}
        subtitle={insight?.fields.subTitle}
        authorName={insight?.fields.author}
        authorImage={insight?.fields.authorImage?.fields?.file?.url}
        slug={insight?.fields.title}
        date={insight?.fields.date}
        coverImage={insight?.fields.cover?.fields?.file?.url}
      />
        <InsightBody content={insight?.fields.content} />
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
            {moreInsight?.map(({ fields }) => (
              <Grid item key={fields.title} xs={12} md={4}>
                <Grid container>
                  <MoreInsight
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
  
  export default Insight;