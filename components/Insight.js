import Link from "components/Link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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

const Insight = ({ title, type, coverImage, author, content, order, slug }) => {
    const classes = useStyles();

      // 클릭시 상세 페이지로 이동하는 링크
  const linkHref = type === "insight" ? "/insight/[slug]" : "/blog/[slug]";
  const linkAs = type === "insight" ? `/insight/${slug}` : `/blog/${slug}`;

  return(
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
  )
}
export default Insight;
