import Link from "components/Link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  root: {
    display: "flex",
    flexDirection: "row",
    transition: "all 0.3s",
    boxShadow: 'none', 
    "&:hover": {
      transform: "translateY(-3px)",
    },
    backgroundColor: "transparent", // 이 부분을 추가하여 배경색을 없앱니다.
  },
  cover: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "21%",
    paddingTop: "30px",
    width: "35%",
    borderRadius: "15px"
  },
  contentWrapper: {
    padding: "16px",
    width: "50%",
    height: "200px",
  },
}));

const Press = ({ title, type, coverImage, author, content, order, slug, createdAt }) => {
  const classes = useStyles();

  // 클릭시 상세 페이지로 이동하는 링크
  const linkHref = type === "press" ? "/press/[slug]" : "/blog/[slug]";
  const linkAs = type === "press" ? `/press/${slug}` : `/blog/${slug}`;

  return (
    <Link href={linkHref} as={linkAs}>
      <a style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <div
            className={classes.cover}
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          ></div>
          <CardContent className={classes.contentWrapper}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold", marginBottom: "5px", marginTop: "-15px", }}>
              보도자료
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {author}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" style={{ marginTop: "117px" }}>
              {createdAt && new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(createdAt))}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default Press;