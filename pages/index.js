import Post from "components/Post";
import Opinion from "components/Opinion"; // Opinion 컴포넌트를 추가합니다.
import Layout from "components/layout/Layout";
import Insight from "components/Insight";
import BtechFIN from 'components/BtechFIN';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from "@material-ui/core";
import { getAllPosts, getAllInsight, getAllOpinions, getAllBtechfin } from "lib/index"; // Import getAllPosts and getAllInsight
import SlideShow from '../components/SlideShow';
import { getSlides } from '../lib/api';

function extractImageFromContent(content) {
  if (!content || !content.content) {
    return null;
  }

  for (const item of content.content) {
    if (item.nodeType === 'embedded-asset-block') {
      return item.data.target.fields.file.url;
    }

    const nestedImage = extractImageFromContent(item);
    if (nestedImage) {
      return nestedImage;
    }
  }

  return null;
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const insights = await getAllInsight(); // 인사이트 데이터를 가져옵니다.
  const opinions = await getAllOpinions(); // Get opinions data
  const btechfin = await getAllBtechfin();  // Add this line
  const slides = [...insights.slice(0, 4), ...btechfin.slice(0,1)]; // Modify this line
  return { revalidate: 1, props: { posts, insights, slides, opinions, btechfin } };
}

export default function Index({ posts, insights, slides, opinions }) {
  const router = useRouter();
  const [shownInsights, setShownInsights] = useState([]);
  const [shownOpinions, setShownOpinions] = useState([]);

  useEffect(() => {
    setShownInsights(insights.slice(0, 5)); // 먼저 5개의 게시물만 표시
    setShownOpinions(opinions.slice(0, 5));
  }, [insights, opinions]);

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
                  {shownInsights?.map(({ fields, sys  }) => (
                    <Grid item key={fields.slug} xs={12}>
                      <Insight
                        title={fields.title}
                        author={fields.author}
                        rank={fields.rank}
                        type="insight" // 이 부분을 추가합니다.
                        coverImage={fields.cover?.fields?.file?.url || extractImageFromContent(fields.content)}
                        content={fields.content}
                        order={fields.order}
                        slug={fields.slug}
                        createdAt={sys.createdAt} // 이 부분을 추가합니다.
                        datePosition={-5} // 날짜 위치를 원하는 값으로 조정합니다.
                        authorPosition={30}
                        rankPosition={12}
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
              {/* Pass opinions data to Opinion component */}
              <Opinion opinions={shownOpinions} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
