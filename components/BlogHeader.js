import {Container, Grid, Typography, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: '1px', // 16:9
  },
}));

const Header = ({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardMedia className={classes.media} image={coverImage} />
          <Typography
            variant="h4"
            component="h1"
            style={{
              fontSize: isMobile ? '20px' : '36px',
              fontWeight: 'bold',
            }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{fontSize: '14px', color: '#b2b2b28f'}}
          >
            {moment(date).format('YYYY-MM-DD HH:mm A')}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
