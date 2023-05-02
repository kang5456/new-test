import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    transition: 'box-shadow 0.2s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadows[6],
    },
  },
  media: {
    height: 100,
    objectFit: 'cover',
  },
  title: {
    fontWeight: 600,
  },
  content: {
    minHeight: 100,
  },
}));

const PlanCard = ({ title, subtitle, imageUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlanCard;
