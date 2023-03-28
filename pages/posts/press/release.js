import React from 'react';
import Layout from 'components/layout/Layout';
import Press from 'components/Press';
import MorePress from 'components/MorePost';
import { Container, Grid, Typography } from '@material-ui/core';
import { getAllPress } from 'lib/index';

export async function getStaticProps() {
  const pressData = await getAllPress();
  return { props: { pressData }, revalidate: 1 };
}

export default function Release({ pressData }) {
  const press = pressData[0]; // 첫 번째 프레스 데이터를 가져옴
  const morePress = pressData.slice(1); // 나머지 프레스 데이터를 가져옴

  return (
    <Layout
      title="Press Releases"
      description="The latest press releases from our company."
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              - Latest Release -
            </Typography>
            <Press
              title={press.fields.title}
              type="press" // 이 부분을 추가합니다.
              cover={press.fields.cover}
              author={press.fields.author}
              content={press.fields.content}
              order={press.fields.order}
              slug={press.fields.slug}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              - Recent Entries -
            </Typography>
            <Grid container spacing={4} justify="center">
              {morePress?.map(({ fields }) => (
                <Grid item key={fields.title} xs={12} md={4}>
                  <MorePress
                    title={fields.title}
                    subtitle={fields.subTitle}
                    authorName={fields.author?.fields?.name} // 수정
                    authorImage={fields.author?.fields?.image?.fields?.file?.url} // 수정
                    slug={fields.slug}
                    date={fields.date}
                    coverImage={fields.cover?.fields?.file?.url} // 수정
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
