import Layout from "components/layout/Layout";
import Post from "components/Post";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";

import { getAllPosts } from "lib/index";

import React from 'react';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}

export default function Index({ posts }) {
  return (
    <>
      <Layout>
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
                {posts?.map(({ fields }) => (
                  <Grid item key={fields.slug} xs={12} sm={6} md={6}>
                    <Post
                      title={fields.title}
                      subtitle={fields.subTitle}
                      authorName={fields.author.fields.name}
                      authorImage={fields.author.fields.image.fields.file.url}
                      slug={fields.slug}
                      date={fields.date}
                      coverImage={fields.coverImage.fields.file.url}
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
