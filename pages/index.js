import Post from "components/Post";
import Opinion from "components/Opinion"; // Opinion 컴포넌트를 추가합니다.
import Layout from "components/layout/Layout";


import { Container, Grid } from "@material-ui/core";

import { getAllPosts, getAllInsight } from "lib/index"; // Import getAllPosts and getAllInsight

import React from 'react';
import SlideShow from '../components/SlideShow';
import { getSlides } from '../lib/api';

export async function getStaticProps() {
  const posts = await getAllPosts();
  const insights = await getAllInsight(); // 인사이트 데이터를 가져옵니다.
  const slides = insights.slice(0, 5); // 첫 5개 게시물을 슬라이드로 사용하려고 합니다.
  return { revalidate: 1, props: { posts, slides } };
}

export default function Index({ posts, slides }) {
  return (
    <>
      <Layout>
        <Container maxWidth="lg">
          {/* you can delete this component or you can use this for your page header. */}
          {/* <PageHeader /> */}

          {/* Add SlideShow component */}
          <SlideShow slides={slides} />

          {/* blog post */}
          <Grid container spacing={4}>
            {/* 최신기사 영역 */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
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
            {/* 오피니언 영역 */}
            <Grid item xs={12} md={4}>
              <Opinion />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
