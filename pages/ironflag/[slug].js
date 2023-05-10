import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import IronflagHeader from "components/BlogHeader";
import IronflagBody from "components/BlogBody";
import MoreIronflag from "components/MorePost";

import { getIronflagBySlug, getMoreIronflag, getAllIronflagWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
    const allIronflag = await getAllIronflagWithSlug();
    return {
      paths: allIronflag.map((ironflag) => `/ironflag/${ironflag.slug}`),
      fallback: true,
    };
  }

export async function getStaticProps({ params }) {
    const ironflag = await getIronflagBySlug(params.slug); // 수정
    const moreIronflag = await getMoreIronflag(params.slug); // 수정
    
    return {
    props: {
        ironflag: ironflag ? ironflag : null,
        moreIronflag: moreIronflag ? moreIronflag: null,
    },
    revalidate: 1,
    };
}

const Ironflag = ({ ironflag, moreIronflag }) => {
    const router = useRouter();
  
    if (!router.isFallback && !ironflag) {
      return <ErrorPage statusCode={404} />;
    }
  
    return (
      <Layout
        title={ironflag?.fields.title}
        description={ironflag?.fields.subTitle}
        ogImage={ironflag?.fields.cover.fields.file.url}
        url={`https://yourwebsite.com/ironflag/${ironflag?.fields.title}`}
      >
      <IronflagHeader
        title={ironflag?.fields.title}
        subtitle={ironflag?.fields.subTitle}
        authorName={ironflag?.fields.author}
        authorImage={ironflag?.fields.authorImage?.fields?.file?.url}
        slug={ironflag?.fields.title}
        date={ironflag?.fields.date}
        coverImage={ironflag?.fields.cover?.fields?.file?.url}
      />
        <IronflagBody content={ironflag?.fields.content} />
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
            {moreIronflag?.map(({ fields }) => (
              <Grid item key={fields.title} xs={12} md={4}>
                <Grid container>
                  <MoreIronflag
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
  
  export default Ironflag;

















