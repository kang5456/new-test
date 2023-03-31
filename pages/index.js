import Post from "components/Post";
import Opinion from "components/Opinion"; // Opinion 컴포넌트를 추가합니다.
import Layout from "components/layout/Layout";
import Insight from "components/Insight";
import { useRouter } from 'next/router';
import { Container, Grid } from "@material-ui/core";
import { getAllPosts, getAllInsight } from "lib/index"; // Import getAllPosts and getAllInsight
import React from 'react';
import SlideShow from '../components/SlideShow';
import { getSlides } from '../lib/api';

export async function getStaticProps() {
  const posts = await getAllPosts();
  const insights = await getAllInsight(); // 인사이트 데이터를 가져옵니다.
  const slides = insights.slice(0, 5); // 첫 5개 게시물을 슬라이드로 사용하려고 합니다.
  return { revalidate: 1, props: { posts,insights, slides } };
}

export default function Index({ posts, insights, slides }) {
  const router = useRouter();
  const handleClick = (title) => {
    router.push('/posts/totalPosts');
  }
  
  return (
    <>
      <Layout>
        <Container maxWidth="lg">
          {/* <PageHeader /> */}

          {/* Add SlideShow component */}
          <SlideShow slides={slides} />

          {/* blog post */}
          <Grid container spacing={4}>
            {/* 최신기사 영역 */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {insights?.map(({ fields }) => (
                  <Grid item key={fields.slug} xs={12} sm={6} md={6}>
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
              
              <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                  onClick={() => handleClick()}
                  style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                  >
                  더보기
                </button>
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
