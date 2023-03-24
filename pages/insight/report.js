import Layout from "components/layout/Layout";
import Post from "components/Post";
import { Container, Grid, Typography } from "@material-ui/core";
import { getAllPosts } from "lib/index";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}

export default function Index({ posts }) {
  return (
    <Layout
      title="Blog with Next.js and Contentful"
      description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog."
    >
      <Container maxWidth="lg">
        <Grid item>
          <Typography variant="h1" align="left" gutterBottom>
            인사이트
          </Typography>
        </Grid>

        {posts.length === 0 ? (
          <Typography variant="h5" align="center" gutterBottom>
            게시물이 없습니다.
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Grid container spacing={4} justifyContent="center">
                {posts.map(({ fields }) => (
                  <Grid
                    item
                    key={fields.slug}
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <Post
                      title={fields.title}
                      subtitle={fields.subTitle}
                      authorName={fields.author.fields.name}
                      authorImage={
                        fields.author.fields.image.fields.file.url
                      }
                      slug={fields.slug}
                      date={fields.date}
                      coverImage={
                        fields.coverImage.fields.file.url
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
}
