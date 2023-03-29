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

  const navbar = (
    <Navbar expand="lg" bg="dark" variant="dark">
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
          <Nav.Link href="/ironflag">아이언 플래그</Nav.Link>
          <NavDropdown title="인사이트" id="collapsible-nav-dropdown-insight">
            <NavDropdown.Item href="/posts/insight/opinion">오피니언</NavDropdown.Item>
            <NavDropdown.Item href="/posts/insight/stories">기획 연재</NavDropdown.Item>
            <NavDropdown.Item href="/posts/insight/report">업계소식</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="B.TechFIN" id="collapsible-nav-dropdown-btechfin">
            <NavDropdown.Item href="/posts/btechfin/b.gamefin">B.GameFIN</NavDropdown.Item>
            <NavDropdown.Item href="/posts/btechfin/b.metafin">B.MetaFIN</NavDropdown.Item>
            <NavDropdown.Item href="/posts/btechfin/b.enterfin">B.EnterFIN</NavDropdown.Item>
            <NavDropdown.Item href="/posts/btechfin/b.esgfin">B.ESGFIN</NavDropdown.Item>
            <NavDropdown.Item href="/posts/btechfin/b.isp">B.ISP</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="언론" id="collapsible-nav-dropdown-press">
            <NavDropdown.Item href="/posts/press/release">보도자료</NavDropdown.Item>
            <NavDropdown.Item href="/posts/press/media">미디어</NavDropdown.Item>
            <NavDropdown.Item href="/posts/press/ir">IR</NavDropdown.Item>
          </NavDropdown>
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