import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Box } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';



const NavbarComponent = ({ classes, handleDropdownOpen, handleDropdownClose, handleItemClick, dropdownOpen }) => {
    

    return (
        <Box className={classes.lightBoxShadow}>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className="navbar-hover"
        fixed="top"
        style={{
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Navbar.Brand
          href="/"
          className="navbar-brand"

        >
          <Grid
            container
            direction="column" // 수직 방향 정렬
            alignItems="center"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          >
            <Grid item>
              <img
                src="/STI.svg"
                alt="logo"
                style={{
                  width: "180px",
                  position: "relative",
                  zIndex: 100,
                  marginBottom: "5px",
                  marginTop: "-5px",
                }}
              />
            </Grid>

          </Grid>
        </Navbar.Brand>

          <Nav 
            className="mr-auto"
            style={{
                position: "relative",
                alignItems: "center",
                left: "135px",
                flexDirection: "row",    
            }}
          >
            <Nav.Item
              onMouseEnter={() => handleDropdownOpen("ironflag")}
              onMouseLeave={handleDropdownClose}
              className={classes.hideDropdownArrow}
            >

              <Nav.Link 
                href="/posts/ironflag/introduce" 
                className={classes.navItem}
                id="collapsible-nav-dropdown-ironflag"
                style={{ 
                  fontSize: "18px",
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "27px",
                 }}
                >
                STIIM
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.ironflag}
                menualign={{ lg: "center" }}
              >
                <NavDropdown.Item
                  href="/posts/ironflag/introduce"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  IR
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/ironflag/b.stiim"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                B.TechFIN
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item
              onMouseEnter={() => handleDropdownOpen("insight")}
              onMouseLeave={handleDropdownClose}
              className={classes.hideDropdownArrow}
            >
              <Nav.Link
                href="/posts/insight"
                className={classes.navItem}
                id="collapsible-nav-dropdown-insight"
                style={{ 
                  fontSize: "18px",
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "27px",
                 }}
              >
                인사이트
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.insight}
                menualign={{ lg: "center" }}
              >

                <NavDropdown.Item
                  href="/posts/insight/report"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  업계 동향
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/insight/stories"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  칼럼
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
                style={{ 
                  fontSize: "18px",
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "27px",
                 }}
              >
                프레스
              </Nav.Link>
              <NavDropdown
                className={classes.navDropdown}
                show={dropdownOpen.btechfin}
                menuAlign={{ lg: "center" }}
              >
                <NavDropdown.Item
                  href="/posts/btechfin/b.isp"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  홍보 자료
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/btechfin/b.gamefin"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  오피니언
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
                style={{ 
                  fontSize: "18px",
                  fontFamily: "Pretendard", 
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "27px", 
                 }}
              >
                미디어
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
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/posts/press/media"
                  onClick={handleItemClick}
                  className={classes.navDropdownItem}
                >
                  Youtube
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
      </Navbar>
    </Box>
    );
};

export default NavbarComponent;