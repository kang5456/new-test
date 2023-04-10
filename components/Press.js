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
    transition: "all 0.3s",
    "&:hover": {
      boxShadow:
        "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transform: "translateY(-3px)",
    },
  },
}));

const Press = ({ title, type, coverImage, author, content, order, slug }) => {
  const classes = useStyles();

  // 클릭시 상세 페이지로 이동하는 링크
  const linkHref = type === "press" ? "/press/[slug]" : "/blog/[slug]";
  const linkAs = type === "press" ? `/press/${slug}` : `/blog/${slug}`;

  return (
    <Link href={linkHref} as={linkAs}>
      <Card className={classes.root}>
        <CardHeader title={title} />
        {coverImage && (
          <CardMedia
            className={classes.media}
            image={`https:${coverImage}`}
            title={title}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            {documentToReactComponents(content)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Press;