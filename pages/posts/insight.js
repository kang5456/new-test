import React from 'react';
import Layout from 'components/layout/Layout';
import Insight from 'components/Insight';
import { Container, Grid, Typography, Avatar } from '@material-ui/core';
import { getAllInsight } from 'lib/index';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: theme.spacing(9), // 추가: 내용과 흰색 배경 사이에 공간을 만듭니다
    margin: theme.spacing(9),
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
    // position: 'relative',
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

export async function getServerSideProps() {
  const insight = await getAllInsight();
  return { props: { insight } };
}

export default function Report({ insight }) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const postsPerPage = 15; // 한 페이지당 보여줄 게시글 수
  const numOfPagesToShow = 10; // 한 번에 보여줄 페이지 번호의 개수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 정보를 저장할 state 변수
  const [startPage, setStartPage] = useState(1); // 시작 페이지 정보를 저장할 state 변수
  const totalPage = Math.ceil(insight.length / postsPerPage); // 총 페이지 수 계산
  const maxBlock = Math.ceil(totalPage / numOfPagesToShow); // 최대 페이지 블록 수 계산

  const noPosts = insight.length === 0;

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      if (nextPage > startPage + numOfPagesToShow - 1) {
        setStartPage(startPage + numOfPagesToShow);
      }
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      if (prevPage < startPage) {
        setStartPage(
          startPage - numOfPagesToShow > 0 ? startPage - numOfPagesToShow : 1
        );
      }
    }
  };

  const pageNumbers = [];
  for (let i = startPage; i < startPage + numOfPagesToShow; i++) {
    if (i > totalPage) break;
    pageNumbers.push(i);
  }

  // 현재 페이지에 보여줄 게시글의 시작/끝 index 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = insight.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 보여줄 게시글 목록

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
                  인사이트
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
                          <Insight
                            title={fields.title}
                            author={fields.author}
                            rank={fields.rank}
                            type='insight' // 이 부분을 추가합니다.
                            coverImage={
                              fields.cover?.fields?.file?.url ||
                              extractImageFromContent(fields.content)
                            }
                            content={fields.content}
                            slug={fields.title}
                            createdAt={sys.createdAt} // 이 부분을 추가합니다.
                            datePosition={-33} // 날짜 위치를 원하는 값으로 조정합니다.
                            authorPosition={2}
                            rankPosition={0}
                            entry={sys.id}                    
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
                      <Grid item>
                        <button
                          onClick={handlePrevClick}
                          style={{
                            background: 'white',
                            color: 'black',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '5px',
                          }}
                        >
                          {'< Prev'}
                        </button>
                      </Grid>
                      {pageNumbers.map((number) => (
                        <Grid item key={number}>
                          <button
                            onClick={() => handleClick(number)}
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
                      <Grid item>
                        <button
                          onClick={handleNextClick}
                          style={{
                            background: 'white',
                            color: 'black',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '5px',
                          }}
                        >
                          {'Next >'}
                        </button>
                      </Grid>
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
