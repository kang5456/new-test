import Layout from "components/layout/Layout";
import Post from "components/Post";
import PageHeader from "components/PageHeader";
import Press from 'components/Press';
import { getAllPress } from 'lib/index';

import { Container, Grid, Typography, Avatar } from "@material-ui/core";

import { getAllPosts } from "lib/index";

import React from 'react';

export async function getStaticProps() {
  const press = await getAllPress();
  return { revalidate: 1, props: { press } };
}

export default function Index({ press }) {
  return (
    <>
      <Layout
        // type your page title and page description.
        title="Blog with Next.js and Contentful"
        description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
      >
        <Container maxWidth="lg">
          {/* you can delete this component or you can use this for your page header. */}
          <Grid item>
            <Typography variant="h1" align="left" gutterBottom>
            인사이트
            </Typography>
          </Grid>

          {/* blog post */}
          <Grid container spacing={4} justifyContent="center">
            {/* 최신기사 영역 */}
            <Grid item xs={12}>
              <Grid container spacing={4} justifyContent="center">
                {press?.map(({ fields }) => (
                  <Grid item key={fields.title} xs={12} sm={6} md={6}>
                    <Press
                      title={fields.title}
                      type="press" // 이 부분을 추가합니다.
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
        </Container>
      </Layout>
    </>
  );
}
