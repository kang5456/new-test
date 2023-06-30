import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Menu, MenuItem } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
// if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';

import { socialMedia } from "data/socialMedia";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "15px",
    height: "15px",
    margin: "2px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
  },
}));

const Social = ({ color }) => {
  const classes = useStyles();
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, facebook, github, homepage } = socialMedia;

  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseOut = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleMouseOut();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  const open = Boolean(anchorEl);

  // if you add twitter , it will be
  // const { instagram, facebook, github, homepage, twitter } = socialMedia;
  // {
  //   //  and add this code to line 98,
  //   /* <Grid
  //       item
  //       component={"a"}
  //       target="_blank"
  //       rel="noreferrer noopener"
  //       href={twitter}
  //     >
  //      <TwitterIcon className={classes.snsIcon} />
  //   </Grid> */
  // }
  return (
    <Grid
      ref={ref} 
      item container 
      spacing={0} 
      justify="center" 
      alignItems="center"
      onMouseOver={handleMouseOver} 
    >
      <Grid 
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <Typography style={{ fontSize: "1em", color: "#fff" }}>CrossCheck</Typography>
      </Grid>
      <Menu
        id="mouse-over-popover"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseOut}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onMouseLeave={handleMouseOut}>
          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={instagram}
          >
            Instagram
          </a>
        </MenuItem>
        <MenuItem onMouseLeave={handleMouseOut}>
          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={github}
          >
            GitHub
          </a>
        </MenuItem>
      </Menu>

      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
        style={{ marginTop: "-3px" }}
      >
        <HomeIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={facebook}
      >
        <FacebookIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
      {/* add social media*/}
    </Grid>
  );
};

export default Social;