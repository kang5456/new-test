import Link from "components/Link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Insight from "pages/insight"

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import MenuIcon from "@material-ui/icons/Menu";

import { routes } from "data/routes";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `4em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `40px`,
      width: `40px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em",
  },
  link: {
    fontSize: "1.25em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

 // 드롭다운 메뉴를 열고 닫기 위한 상태
 const [anchorEl, setAnchorEl] = useState({
  insight: null,
  btechfin: null,
  press: null
});

  // 드롭다운 메뉴를 열거나 닫는 함수
  const handleDropdownMenu = (menuName, event) => {
    setAnchorEl((prevAnchorEl) => ({
      ...prevAnchorEl,
      [menuName]: prevAnchorEl[menuName] ? null : event.currentTarget
    }));
  };

  // 드롭다운 메뉴 항목을 클릭했을 때 동작하는 함수
  const handleDropdownItemClick = (url) => {
    router.push(url);
    setAnchorEl({ insight: null, btechfin: null, press: null });
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const path = routes;

  const tabs = (
    <>
      <Grid container justify="center" spacing={2}>
        {/* 아이언 플래그 탭 */}
        <Grid item>
          <Typography
            className={classes.link}
            style={{
              fontWeight: router.pathname === "/ironflag" && "bold",
              borderBottom:
                router.pathname === "/ironflag" && "1px solid #757ce8",
            }}
          >
            아이언 플래그
          </Typography>
        </Grid>

        {/* 인사이트 탭 */}
        <Grid item>
          <Typography
            className={classes.link}
            style={{
              fontWeight: router.pathname === "/insight" && "bold",
              borderBottom:
                router.pathname === "/insight" && "1px solid #757ce8",
            }}
            onClick={(event) => handleDropdownMenu("insight", event)}
          >
            인사이트
          </Typography>
          <Menu
            anchorEl={anchorEl.insight}
            open={Boolean(anchorEl.insight)}
            onClose={(event) => handleDropdownMenu("insight", event)}
          >
            <MenuItem onClick={() => handleDropdownItemClick("/insight/opinion")}>
              오피니언
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/insight/report")}>
              기획 연재
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/insight")}>
              업계소식
            </MenuItem>
          </Menu>
        </Grid>

        {/* btechfin 탭 */}
        <Grid item>
          <Typography
            className={classes.link}
            style={{
              fontWeight: router.pathname === "/btechfin" && "bold",
              borderBottom:
                router.pathname === "/btechfin" && "1px solid #757ce8",
            }}
            onClick={(event) => handleDropdownMenu("btechfin", event)}
          >
            B.TechFIN
          </Typography>
          <Menu
          anchorEl={anchorEl.btechfin}
          open={Boolean(anchorEl.btechfin)}
          onClose={(event) => handleDropdownMenu("btechfin", event)}
          >
            <MenuItem onClick={() => handleDropdownItemClick("/btechfin/b.gamefin")}>
              B.GameFIN
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/btechfin/b.metafin")}>
              B.MetaFIN
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/btechfin/b.enterfin")}>
              B.EnterFIN
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/btechfin/b.esgfin")}>
              B.ESGFIN
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/btechfin/b.isp")}>
              B.ISP
            </MenuItem>
          </Menu>
        </Grid>

        {/* 언론 탭 */}
        <Grid item>
          <Typography
            className={classes.link}
            style={{
              fontWeight: router.pathname === "/press" && "bold",
              borderBottom:
                router.pathname === "/press" && "1px solid #757ce8",
            }}
            onClick={(event) => handleDropdownMenu("press", event)}
          >
            언론
          </Typography>
          <Menu
            anchorEl={anchorEl.press}
            open={Boolean(anchorEl.press)}
            onClose={(event) => handleDropdownMenu("press", event)}
          >
            <MenuItem onClick={() => handleDropdownItemClick("/press/release")}>
              보도자료
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/press/media")}>
              미디어
            </MenuItem>
            <MenuItem onClick={() => handleDropdownItemClick("/press/ir")}>
              IR
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </>
  );


//   const drawer = (
//     <>
//       <SwipeableDrawer
//         disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         onOpen={() => setOpenDrawer(true)}
//         classes={{ paper: classes.drawer }}
//         anchor="right"
//       >
//         <div className={classes.toolbarMargin} />
//         <List disablePadding>
//   {path.map(({ name, link }) => (
//     <ListItem
//       key={link}
//       divider
//       button
//       onClick={() => {
//         setOpenDrawer(false);
//       }}
//     >
//       <ListItemText disableTypography>
//         <Link href={link}>
//           <Typography
//             style={{
//               color:
//                 router.pathname === link
//                   ? "primary"
//                   : "rgb(107 107 107)",
//               fontWeight: router.pathname === link && "bold",
//             }}
//           >
//             {name}
//           </Typography>
//         </Link>
//       </ListItemText>
//     </ListItem>
//   ))}
//   <ListItem
//     key="/insight"
//     divider
//     button
//     onClick={() => {
//       setOpenDrawer(false);
//     }}
//   >
//     <ListItemText disableTypography>
//       <Link href="/insight">
//         <Typography
//           style={{
//             color:
//               router.pathname === "/insight"
//                 ? "primary"
//                 : "rgb(107 107 107)",
//             fontWeight: router.pathname === "/insight" && "bold",
//           }}
//         >
//           인사이트
//         </Typography>
//       </Link>
//     </ListItemText>
//   </ListItem>
// </List>
//       </SwipeableDrawer>
//       <IconButton
//         onClick={() => setOpenDrawer(!openDrawer)}
//         disableRipple
//         className={classes.drawerIconContainer}
//       >
//         <MenuIcon className={classes.drawerIcon} />
//       </IconButton>
//     </>
//   );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar
            disableGutters
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              padding: matches ? "0 16px" : "24px",
            }}
          >
            <Link href="/">
              <Grid container wrap="nowrap" spacing={1} alignItems="flex-end">
                <Grid item>
                  <Typography
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.75em",
                      position: "relative",
                      zIndex: 100,
                    }}
                  >
                    BlogTest
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src="/favicon-32x32.png"
                    alt="logo"
                    style={{
                      height: "27px",
                      width: "27px",
                      position: "relative",
                      zIndex: 100,
                    }}
                  />
                </Grid>
              </Grid>
            </Link>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;