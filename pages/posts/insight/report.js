import React from 'react';
import Layout from "components/layout/Layout";
import Insight from "components/Insight";
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { getAllInsight } from "lib/index";


export async function getStaticProps() {
  const insights = await getAllInsight();
  return { revalidate: 1, props: { insights } };
}

export default function Report({ insights }) {

   return (
    <Layout>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" align="left" gutterBottom>
              인사이트
            </Typography>
          </Grid>

          <Grid container spacing={4} justify="center">
            <Grid item xs={12}>
              <Grid container spacing={4} justify="center">
                {insights?.map(({ fields }) => (
                  <Grid item key={fields.title} xs={12} sm={6} md={6}>
                    <Insight
                      title={fields.title}
                      type="insight" // 이 부분을 추가합니다.
                      coverImage={fields.cover?.fields?.file?.url} // 이 부분을 수정합니다.
                      author={fields.author}
                      content={fields.content}
                      order={fields.order}
                      slug={fields.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </Layout>
  );
}
