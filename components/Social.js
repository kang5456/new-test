import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Menu, MenuItem } from "@material-ui/core";
import { socialMedia } from "data/socialMedia";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";


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

  return (
    <Grid
      ref={ref} 
      item container 
      spacing={0} 
      justifyContent="center" 
      alignItems="center"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut} // Move the onMouseLeave here 
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
        style={{
          marginLeft: "-115px"
        }}
      >
        <MenuItem>
          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={homepage}
          >
            HomePage
          </a>
        </MenuItem>
        <MenuItem>
          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={instagram}
          >
            Blog
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

    </Grid>
  );
};

export default Social;