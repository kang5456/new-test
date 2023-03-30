import Layout from "components/layout/Layout";
import React, { useState, useEffect } from 'react';

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Stories = () => {
  const [posts, setPosts] = useState([]);
  const [noPosts, setNoPosts] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      // 게시물 데이터를 가져오는 API 호출을 여기에 작성합니다.
      // 예시: const response = await fetch('/api/press');
      //       const data = await response.json();
      //       setPosts(data);

      // 임시로 빈 배열을 설정합니다.
      const data = [];

      setPosts(data);
      setNoPosts(data.length === 0);
    }

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          {noPosts ? (
            <Grid item>
              <Typography variant="h1" align="center" gutterBottom>
                게시물 없음
              </Typography>
            </Grid>
          ) : (
            posts.map((post) => (
              <Grid item key={post.id}>
                <Typography variant="h6">{post.title}</Typography>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Stories;
