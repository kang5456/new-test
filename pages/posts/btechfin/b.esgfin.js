import React from 'react';
import Layout from 'components/layout/Layout';
import Press from 'components/Press';
import { Container, Grid, Typography } from '@material-ui/core';
import { getAllPress, getMoreBtechfin } from 'lib/index';

export async function getStaticProps() {
  // const press = await getAllPress();
  const BESGFIN = await getMoreBtechfin(null, "BESGFIN"); // title 필요하지 않으면 null로
  return { props: { BESGFIN }, revalidate: 1 };
}

export default function Release({ BESGFIN }) {
  const noPosts = BESGFIN.length === 0;

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
          {noPosts ? (
            <Grid item xs={12}>
              <Typography variant="h5" align="center" gutterBottom>
                게시물 없음
              </Typography>
            </Grid>
          ) : (
            <Grid container spacing={4} justify="center">
              <Grid item xs={12}>
                <Grid container spacing={4} justify="center">
                  {BESGFIN?.map(({ fields }) => (
                    <Grid item key={fields.title} xs={12} sm={6} md={6}>
                      <Press
                        title={fields.title}
                        type="BESGFIN" // 이 부분을 추가합니다.
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
          )}
          
        </Grid>
      </Container>
    </Layout>
  );
}
