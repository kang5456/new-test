import Link from "components/Link";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "45.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    color: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  root: {
    transition: "all 0.3s",
    "&:hover": {
      boxShadow:
        "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transform: "translateY(-3px)",
    },
  },
  link: {
    width: "100%",
  },
}));

export default function Post({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
  type = "blog", // 새로운 prop 'type'을 추가하고 기본값을 "blog"로 설정합니다.
}) {
  const classes = useStyles();

  // 'type' prop에 따라 링크를 동적으로 처리합니다.
  let linkHref, linkAs;
  switch (type) {
    case "press":
      linkHref = "/press/[slug]";
      linkAs = `/press/${slug}`;
      break;
    case "insight":
      linkHref = "/insight/[slug]";
      linkAs = `/insight/${slug}`;
      break;
    default:
      linkHref = "/blog/[slug]";
      linkAs = `/blog/${slug}`;
  }

  return (
    <Link href={linkHref} as={linkAs} className={classes.link}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={coverImage} title={title} />
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {subtitle && subtitle.length > 80 ? subtitle.substr(0, 80) + "..." : subtitle}
          </Typography>
        </CardContent>
        {/* if you don't need author section, delete this block */}
        {/* author */}
        <CardHeader
          avatar={
            <Avatar
              aria-label="avator image"
              className={classes.avatar}
              style={{
                backgroundImage: `url(${authorImage})`,
              }}
            />
          }
          title={authorName}
          subheader={moment(date).format("MMMM Do YYYY")}
        />
        {/* author */}
      </Card>
    </Link>
  );
}
