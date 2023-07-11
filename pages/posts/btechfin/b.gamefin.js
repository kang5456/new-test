import React from 'react';
import Layout from 'components/layout/Layout';
import BtechFIN from 'components/BtechFIN';
import { Container, Grid, Typography } from '@material-ui/core';
import { getAllBtechfin, getMoreBtechfin } from 'lib/index';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: theme.spacing(9), // 추가: 내용과 흰색 배경 사이에 공간을 만듭니다
    margin: theme.spacing(10),
    '@media (768px <= width <= 1280px)': {
      padding: theme.spacing(4),
      margin: theme.spacing(4),
    },
    '@media (max-Width: 768px)': {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    },
  },
  contentWrapper: {
    margin: '0 auto', // 가로 마진을 자동으로 설정하면, 화면 크기에 관계없이 중앙에 고정됩니다.
    maxWidth: '1450px', // 원하는 최대 너비 값을 설정하세요. 이 값에 따라 가로 폭이 제한됩니다.
    padding: theme.spacing(0, 0),
  },
  customText: {
    color: '#c1c1c1', // 원하는 색상 코드를 입력하세요.
  },
}));

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
  //const bTechFin = await getAllBtechfin();
  const BGameFIN = await getMoreBtechfin(null, 'B.GameFIN'); // title 필요하지 않으면 null로
  return { props: { BGameFIN }, revalidate: 1 };
}

export default function Bgamefin({ BGameFIN }) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 정보를 저장할 state 변수
  const postsPerPage = 10; // 한 페이지당 보여줄 게시글 수
  const noPosts = BGameFIN.length === 0;

  // 현재 페이지에 보여줄 게시글의 시작/끝 index 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BGameFIN.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 보여줄 게시글 목록

  // 페이지 번호 목록을 만드는 함수
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(BGameFIN.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Layout>
      <div className={classes.contentWrapper}>
        <div className={classes.background}>
          <Container maxWidth='md'>
            <Grid container spacing={4} justify='center'>
              <Grid item xs={12}>
                <Typography
                  variant='h2'
                  component='h1'
                  align='left'
                  gutterBottom
                  style={{
                    fontSize: isMobile ? '18px' : '28px',
                    fontWeight: 'bold',
                  }}
                >
                  Column
                </Typography>
              </Grid>
              {noPosts ? (
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '10px',
                      borderRadius: '4px',
                    }}
                  >
                    <img
                      src='/empty-folder.svg'
                      alt='Empty folder'
                      style={{ width: '30px' }}
                    />
                  </div>
                  <Typography
                    variant='subtitle1'
                    align='center'
                    gutterBottom
                    className={classes.customText}
                  >
                    게시물 없습니다.
                  </Typography>
                </Grid>
              ) : (
                <Grid container spacing={4} justify='center'>
                  <Grid item xs={12}>
                    <Grid container spacing={isMobile ? 3 : 5} justify='center'>
                      {currentPosts?.map(({ fields, sys }) => (
                        <Grid item key={fields.title} xs={12}>
                          <BtechFIN
                            title={fields.title}
                            author={fields.author}
                            rank={fields.rank}
                            type='B.GameFIN' // 이 부분을 추가합니다.
                            coverImage={
                              fields.cover?.fields?.file?.url ||
                              extractImageFromContent(fields.content)
                            }
                            content={fields.content}
                            slug={fields.title}
                            createdAt={sys.createdAt} // 이 부분을 추가합니다.
                            datePosition={-32} // 날짜 위치를 원하는 값으로 조정합니다.
                          />
                        </Grid>
                      ))}
                    </Grid>

                    {/* 페이지 번호 목록을 출력 */}
                    <Grid
                      container
                      spacing={2}
                      justify='center'
                      style={{ marginTop: '2rem' }}
                    >
                      {pageNumbers.map((number) => (
                        <Grid item key={number}>
                          <button
                            onClick={() => setCurrentPage(number)}
                            style={{
                              background: 'white',
                              color: 'black',
                              border: 'none',
                              padding: '5px 10px',
                              borderRadius: '5px',
                            }}
                          >
                            {number}
                          </button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
