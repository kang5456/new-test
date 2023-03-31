import Layout from "components/layout/Layout";
import Press from 'components/Press';
import { getAllPress } from 'lib/index';
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import React from 'react';
import { useState } from "react";

export async function getStaticProps() {
  const press = await getAllPress();
  return { revalidate: 1, props: { press } };
}

export default function Index({ press }) {

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 정보를 저장할 state 변수
  const postsPerPage = 10; // 한 페이지당 보여줄 게시글 수

  // 현재 페이지에 보여줄 게시글의 시작/끝 index 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = press.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 보여줄 게시글 목록

  // 페이지 번호 목록을 만드는 함수
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(press.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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

              {/* 페이지 번호 목록을 출력 */}
              <Grid container spacing={2} justify="center" style={{ marginTop: '2rem' }}>
                {pageNumbers.map((number) =>(
                  <Grid item key={number}>
                  <button onClick={() => setCurrentPage(number)}>{number}</button>
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
