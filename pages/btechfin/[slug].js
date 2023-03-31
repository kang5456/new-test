import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "components/layout/Layout";
import BtechfinHeader from "components/BlogHeader";
import BtechfinBody from "components/BlogBody";
import MoreBtechfin from "components/MorePost";

import { getBtechfinBySlug, getMoreBtechfin, getAllBtechfinWithSlug } from "lib/index";

import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
    const allBtechfin = await getAllBtechfinWithSlug();
    return {
      paths: allBtechfin.map((btechfin) => `/btechfin/${btechfin.slug}`),
      fallback: true,
    };
  }

export async function getStaticProps({ params }) {
    const btechfin = await getBtechfinBySlug(params.slug); // 수정
    const moreBtechfin = await getMoreBtechfin(params.slug); // 수정
    
    return {
    props: {
        btechfin: btechfin ? btechfin : null,
        moreBtechfin: moreBtechfin ? moreBtechfin : null,
    },
    revalidate: 1,
    };
}

const Btechfin = ({ btechfin, moreBtechfin }) => {
    const router = useRouter();
  
    if (!router.isFallback && !btechfin) {
      return <ErrorPage statusCode={404} />;
    }
  
    return (
      <Layout
        title={btechfin?.fields.title}
        description={btechfin?.fields.subTitle}
        ogImage={btechfin?.fields.cover.fields.file.url}
        url={`https://yourwebsite.com/btechfin/${btechfin?.fields.title}`}
      >
      <BtechfinHeader
        title={btechfin?.fields.title}
        subtitle={btechfin?.fields.subTitle}
        authorName={btechfin?.fields.author}
        authorImage={btechfin?.fields.authorImage?.fields?.file?.url}
        slug={btechfin?.fields.title}
        date={btechfin?.fields.date}
        coverImage={btechfin?.fields.cover?.fields?.file?.url}
      />
        <BtechfinBody content={btechfin?.fields.content} />
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
            {moreBtechfin?.map(({ fields }) => (
              <Grid item key={fields.title} xs={12} md={4}>
                <Grid container>
                  <MoreBtechfin
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
  
  export default Btechfin;