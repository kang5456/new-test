import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  name: {
    marginBottom: theme.spacing(1),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    zIndex: 1,
    textAlign: "left",
    width: "100%",
  },
  role: {
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
    zIndex: 1,
    width: "100%",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  en: {
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
    zIndex: 1,
    width: "100%",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  avatar: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
    position: "relative",
    zIndex: 0,
  },
  imageWrapper: {
    backgroundColor: "#ebebfa",
    borderRadius: theme.spacing(1),
    display: "inline-block",
  },
  line: {
    backgroundColor: "#868e96",
    height: "1px",
    width: "5%",
    margin: "36px auto",
    color: "#d3d3d3"
  },
  background: {
    backgroundColor: "#ffff",
    paddingTop: theme.spacing(0), // 여기를 조정해주세요 (위쪽 여백 추가)
    paddingBottom: theme.spacing(5), // 여기를 조정해주세요 (아래쪽 여백 추가)
  },
}));

const TeamMember = ({ name, role, en, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <div style={{ position: "relative" }}>
        <div className={classes.imageWrapper}>
          <img src={image} alt={name} className={classes.avatar} />
        </div>
        <div className={classes.name}>{name}</div>
        <div className={classes.role}>{role}</div>
        <div className={classes.role}>{en}</div>
      </div>
    </Grid>
  );
};

const TeamIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: "bold" }}>
          이끄는 사람들
        </Typography>
        <div className={classes.line}></div>
        <Grid container spacing={4} justify="center">
          <TeamMember
            name="CEO"
            role="오세용"
            en="Seyong Oh"
            image="/people2.png"
          />
        </Grid>
      </Container>
    </div>
  );
};

export default TeamIntro;
