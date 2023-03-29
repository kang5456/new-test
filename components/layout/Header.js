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
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
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
  navItem: {
    fontSize: "1.2em", // 글씨 크기 조절
    margin: "0 10px", // 간격 조절
    color: "#f5f5f5", // 글씨 색상 조절
    minHeight: '10px', // 원하는 높이로 변경
    "&:hover": {
      color: "#ff9800", // 마우스를 올렸을 때 글씨 색상 조절
    },
  },
  dropdownMenu: {
    minWidth: "30px", // 최소 너비 조절
    width: "auto", // 너비를 자동으로 조절
    maxHeight: "250px", // 최대 높이 조절
    overflowY: "auto", // 높이가 최대 높이를 초과할 경우 스크롤 표시
    padding: "0px", // 패딩 조절
  },
  navDropdown: {
    position: "relative",
  },
  navDropdownMenu: {
    position: "absolute",
    left: "0",
    top: "100%",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

 // 드롭다운 메뉴를 열고 닫기 위한 상태
 const [dropdownOpen, setDropdownOpen] = useState({
  insight: false,
  btechfin: false,
  press: false,
});

  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const path = routes;

  const navbar = (
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar-hover">
      <Navbar.Brand href="/">
        <Grid container wrap="nowrap" spacing={1} alignItems="flex-end">
          <Grid item>
            <Typography
              style={{
                color: "#ffff",
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
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mx-auto">
    <Nav.Link className={classes.navItem} href="/ironflag">아이언플래그</Nav.Link>

    <Nav.Item
      onMouseEnter={() => setDropdownOpen({ ...dropdownOpen, insight: true })}
      onMouseLeave={() => setDropdownOpen({ ...dropdownOpen, insight: false })}
    >
      <Nav.Link href="/insight" className={classes.navItem} id="collapsible-nav-dropdown-insight">인사이트</Nav.Link>
      <NavDropdown
        className={classes.navDropdown}
        show={dropdownOpen.insight}
        menuAlign={{ lg: 'center' }}
      >
        <NavDropdown.Item href="/posts/insight/opinion">오피니언</NavDropdown.Item>
        <NavDropdown.Item href="/posts/insight/stories">기획 연재</NavDropdown.Item>
        <NavDropdown.Item href="/posts/insight/report">업계소식</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>

    <Nav.Item
      onMouseEnter={() => setDropdownOpen({ ...dropdownOpen, btechfin: true })}
      onMouseLeave={() => setDropdownOpen({ ...dropdownOpen, btechfin: false })}
    >
      <Nav.Link href="/btechfin" className={classes.navItem} id="collapsible-nav-dropdown-btechfin">B.TechFIN</Nav.Link>
      <NavDropdown
        className={classes.navDropdown}
        show={dropdownOpen.btechfin}
        menuAlign={{ lg: 'center' }}
      >
        <NavDropdown.Item href="/posts/btechfin/b.gamefin">B.GameFIN</NavDropdown.Item>
        <NavDropdown.Item href="/posts/btechfin/b.metafin">B.MetaFIN</NavDropdown.Item>
        <NavDropdown.Item href="/posts/btechfin/b.enterfin">B.EnterFIN</NavDropdown.Item>
        <NavDropdown.Item href="/posts/btechfin/b.esgfin">B.ESGFIN</NavDropdown.Item>
        <NavDropdown.Item href="/posts/btechfin/b.isp">B.ISP</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>

    <Nav.Item
      onMouseEnter={() => setDropdownOpen({ ...dropdownOpen, press: true })}
      onMouseLeave={() => setDropdownOpen({ ...dropdownOpen, press: false })}
    >
      <Nav.Link href="/press" className={classes.navItem} id="collapsible-nav-dropdown-press">언론</Nav.Link>
      <NavDropdown
        className={classes.navDropdown}
        show={dropdownOpen.press}
        menuAlign={{ lg: 'center' }}
      >
        <NavDropdown.Item href="/posts/press/release">보도자료</NavDropdown.Item>
        <NavDropdown.Item href="/posts/press/media">미디어</NavDropdown.Item>
        <NavDropdown.Item href="/posts/press/ir">IR</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
  </Nav>
</Navbar.Collapse>

    </Navbar>
  );

  return (
    <>
      {navbar}
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;