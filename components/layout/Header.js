import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import NavbarComponent from './header/Navbar';
import MobileNavbarComponent from './header/MobileNav';

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
    color: "#000",
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

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 드롭다운 메뉴를 열고 닫기 위한 상태
  const [dropdownOpen, setDropdownOpen] = useState({
    insight: false,
    btechfin: false,
    press: false,
    ironflag: false, // crosscheck 추가
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
      ironflag: false, // crosscheck 추가
    });
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    const targetHref = e.currentTarget.getAttribute("href");
    router.push(targetHref);
  };
  

  const navbar = 

  <NavbarComponent
    classes={classes}
    handleDropdownOpen={handleDropdownOpen}
    handleDropdownClose={handleDropdownClose}
    handleItemClick={handleItemClick}
    dropdownOpen={dropdownOpen}
    style={{ marginLeft: 'auto', marginRight: 'auto', position:"absolute"}}
  />

  const mobilenavbar = 
  
  <MobileNavbarComponent
    classes={classes}
    handleDropdownOpen={handleDropdownOpen}
    handleDropdownClose={handleDropdownClose}
    handleItemClick={handleItemClick}
    dropdownOpen={dropdownOpen}
    style={{ marginLeft: 'auto', marginRight: 'auto', position:"absolute"}}
  />

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {windowWidth > 768 ? navbar : mobilenavbar}
        <div className={classes.toolbarMargin} />
      </div>
    </>
  );
};
export default Header;
