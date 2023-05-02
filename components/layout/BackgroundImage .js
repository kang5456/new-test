import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      overflow: "hidden",
      minHeight: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      zIndex: 1,
      color: "#ffff",
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto",
      padding: theme.spacing(4),
      backgroundColor: "#fff",
      borderRadius: theme.spacing(1),
    },
  }));
  
  const BackgroundImage = ({ imageUrl, title, subtitle }) => {
    const classes = useStyles();
  
    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className={classes.content}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5">{subtitle}</Typography>
        </div>
      </div>
    );
  };
  
  export default BackgroundImage;