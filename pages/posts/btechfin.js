import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  content: {
    lineHeight: 1.8,
    marginBottom: theme.spacing(4),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: theme.spacing(4),
  },
}));

const btechfin = () => {
  const classes = useStyles();
  // use ure name
  const name = '"Your Name"';
  // use your picture
  const avatar =
    "https://images.ctfassets.net/atxm25972ze9/7y6t7fqxDPqJ21ZECdUV9D/0ace08faabfb401be8e89d689b04ae98/adult-1868750__340.jpg?h=250";
  return (
    <Layout
      // type your page title and page description.
      title=" About | Blog with Next.js and Contentful"
      description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>

          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
            ------ plancard part ------
            </Typography>
          </Grid>

          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
            </Grid>

            <Grid item container md={8}>
              <Typography variant="body1">
                {/* your introduction */}
              ------ Leader part ------
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default btechfin;
