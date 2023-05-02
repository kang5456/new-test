import Post from "components/Post";
import Opinion from "components/Opinion"; // Opinion 컴포넌트를 추가합니다.
import Layout from "components/layout/Layout";
import Insight from "components/Insight";
import { useRouter } from 'next/router';
import { Container, Grid, Typography } from "@material-ui/core";
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
          <div style={{ marginTop: "105px" }}> {/* Add this div to wrap SlideShow component */}
            <SlideShow slides={slides} />
          </div>

          {/* blog post */}
          <Grid container spacing={4} style={{ marginTop: "100px" }}>
            {/* 최신기사 영역 */}
            <Grid item xs={12} md={8}>
            <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: "40px" }}>
                최신기사
              </Typography>
                <Grid container spacing={4}>
                  {insights?.map(({ fields, sys  }) => (
                    <Grid item key={fields.slug} xs={12}>
                      <Insight
                        title={fields.title}
                        type="insight" // 이 부분을 추가합니다.
                        coverImage={fields.cover?.fields?.file?.url} // 이 부분을 수정합니다.
                        author={fields.author}
                        content={fields.content}
                        order={fields.order}
                        slug={fields.title}
                        createdAt={sys.createdAt} // 이 부분을 추가합니다.
                      />
                    </Grid>
                  ))}
                </Grid>
              
              <Grid item xs={12} style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                  onClick={() => handleClick()}
                  style={{
                    backgroundColor: '#f9f9f9',
                    color: '#626262',
                    padding: '10px 40px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    fontSize: "16px",
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  >
                  더보기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: '8px', color: "#626262" }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
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
