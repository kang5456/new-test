import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
    marginBottom: `0.1em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.1em",
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
    margin: "5px", // 간격 조절
    color: "#000", // 글씨 색상 조절
    minHeight: "10px", // 원하는 높이로 변경
    "&:hover": {
      color: "#7b68ee", // 마우스를 올렸을 때 글씨 색상 조절
    },
  },
  dropdownMenu: {
    minWidth: "20px", // 최소 너비 조절
    width: "auto", // 너비를 자동으로 조절
    maxHeight: "250px", // 최대 높이 조절
    overflowY: "auto", // 높이가 최대 높이를 초과할 경우 스크롤 표시
    padding: "1px", // 패딩 조절
  },
  navDropdown: {
    position: "relative",
    "& .dropdown-menu": {
      border: "none", // 이 속성을 추가하여 테두리를 없애줍니다.
  },
  },
  navDropdownMenu: {
    position: "absolute",
    left: "0",
    top: "100%",
    zIndex: 5000, // 이 값을 높게 설정하여 다른 요소보다 위에 표시되도록 합니다.
  },
  navDropdownItem: {
    fontSize: "0.9em", // 원하는 글씨 크기로 조절
  },
  lightBoxShadow: {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)", // 그림자 색상과 퍼지 정도를 조절
  },
  hideDropdownArrow: {
    "& .nav-link::after": {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  // 드롭다운 메뉴를 열고 닫기 위한 상태
  const [dropdownOpen, setDropdownOpen] = useState({
    insight: false,
    btechfin: false,
    press: false,
  });

  const handleDropdownOpen = (dropdown) => {
    setDropdownOpen((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = key === dropdown;
      });
      return newState;
    });
  };

  const handleDropdownClose = () => {
    setDropdownOpen({
      insight: false,
      btechfin: false,
      press: false,
    });
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    const targetHref = e.currentTarget.getAttribute("href");
    router.push(targetHref);
  };

  const navbar = (
    <Box className={classes.lightBoxShadow}>
      <Navbar
        expand="lg"
        bg="white"
        variant="white"
        className="navbar-hover"
        fixed="top"
        style={{
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Navbar.Brand
          href="/"
          className="navbar-brand"
          style={{
            marginLeft: "calc(50% - 640px)", // 로고 위치 조정
            marginRight: "calc(50% - 500px)", // 로고 위치 조정
          }}
        >
          <Grid
            container
            direction="column" // 수직 방향 정렬
            alignItems="center"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          >
            <Grid item>
              <img
                src="/logo_initiative.png"
                alt="logo"
                style={{
                  height: "24px",
                  width: "45px",
                  position: "relative",
                  zIndex: 100,
                  marginBottom: "5px",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "1em",
                  position: "relative",
                  zIndex: 100,
                }}
              >
                TiiMs
              </Typography>
            </Grid>
          </Grid>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            position: "fixed",
            marginLeft: "calc(50% - 204px)", // 로고 위치 조정
            marginRight: "calc(50% - 500px)", // 로고 위치 조정
            marginTop: "15px",
            fontWeight: "bold",
            fontSize: "1.051em",
          }}
        >
          <Nav className="mx-auto">
            <Nav.Link href="/posts/ironflag" className={classes.navItem}>
              크로스체크
            </Nav.Link>

            <Nav.Item
              onMouseEnter={() => handleDropdownOpen("insight")}
              onMouseLeave={handleDropdownClose}
              className={classes.hideDropdownArrow}
            >
              <Nav.Link
                href="/posts/insight"
                className={classes.navItem}
                id="collapsible-nav-dropdown-insight"
              >
                인사이트
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.insight}
                menualign={{ lg: "center" }}
              >
                <NavDropdown.Item
                  href="/posts/insight/opinion"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  오피니언
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/insight/stories"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  기획 연재
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/insight/report"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  업계소식
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item
              onMouseEnter={() => handleDropdownOpen("btechfin")}
              onMouseLeave={handleDropdownClose}
              className={classes.hideDropdownArrow}
            >
              <Nav.Link
                href="/posts/btechfin"
                className={classes.navItem}
                id="collapsible-nav-dropdown-btechfin"
              >
                B.TechFIN
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.btechfin}
                menuAlign={{ lg: "center" }}
              >
                <NavDropdown.Item
                  href="/posts/btechfin/b.gamefin"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  B.GameFIN
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/btechfin/b.metafin"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  B.MetaFIN
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/btechfin/b.enterfin"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  B.EnterFIN
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/btechfin/b.esgfin"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  B.ESGFIN
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/btechfin/b.isp"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  B.ISP
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item
              onMouseEnter={() => handleDropdownOpen("press")}
              onMouseLeave={handleDropdownClose}
              className={classes.hideDropdownArrow}
            >
              <Nav.Link
                href="/posts/press"
                className={classes.navItem}
                id="collapsible-nav-dropdown-press"
              >
                언론
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.press}
                menuAlign={{ lg: "center" }}
              >
                <NavDropdown.Item
                  href="/posts/press/release"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  보도자료
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/press/media"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  미디어
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/press/ir"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  IR
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );

  return (
    <>
      {navbar}
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
