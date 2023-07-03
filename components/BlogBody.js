import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Container, Grid, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "3em",
    height: "3em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
  root: {
    maxWidth: "1100px",
  },
  blogBody: {
    marginTop: "2rem",
    "& p": {
      ...theme.typography.body1,
    },
    "& h1, h2, h3, h4, h5": {
      fontSize: "1.5rem",
      marginBottom: "0",
      marginTop: "2rem",
    },
    "& a": {
      color: theme.palette.info.main,
    },
  },
  media: {
    height: 440,
    paddingTop: "0px", // 16:9
  },
}));

const BlogBody = ({ 
    content,
    coverImage, 
}) => {
  const classes = useStyles();
  
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p style={{ marginBottom: "1.5em", marginTop: "0.5em" }}>{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const { url } = file;
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={url} alt={title} />;
          </div>
        );
      },
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {coverImage && (
        <img src={coverImage} alt="" className={classes.coverImage} />
      )}
      </div>
      <Box // 게시글 조절
        component="div"
        style={{
          fontSize: "18px",
          fontFamily: "Pretendard",
          fontWeight: "400",
          lineHeight: "1.6",
          letterSpacing: "0.009em",
          wordBreak: "keep-all",
          color: "#333",
          padding: "0 1em", // 좌우 여백을 추가
          textAlign: "justify", // 텍스트 정렬을 양쪽 정렬로 변경
          whiteSpace: "pre-wrap", // 띄어쓰기와 줄바꿈 보존
        }}
      >
        {documentToReactComponents(content, options)}
      </Box>
    </div>
  );
};

export default BlogBody;