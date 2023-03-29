import React from 'react';
import Layout from 'components/layout/Layout';
import Press from 'components/Press';
import MorePress from 'components/MorePost';
import { Container, Grid, Typography } from '@material-ui/core';
import { getAllPress } from 'lib/index';

export async function getStaticProps() {
  const press = await getAllPress();
  return { props: { press }, revalidate: 1 };
}

export default function Release({ press }) {
  // const press = pressData[0]; // 첫 번째 프레스 데이터를 가져옴
  // const morePress = pressData.slice(1); // 나머지 프레스 데이터를 가져옴

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" align="left" gutterBottom>
              언론
            </Typography>
          </Grid>

          <Grid container spacing={4} justify="center">
            <Grid item xs={12}>
              <Grid container spacing={4} justify="center">
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
          
        </Grid>
      </Container>
    </Layout>
  );
}
