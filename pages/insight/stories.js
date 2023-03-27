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

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>

          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
            게시물 없음
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Layout>
  );
};

export default btechfin;
