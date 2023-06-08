import { Grid, Typography } from "@material-ui/core";
import Marquee from "react-fast-marquee";
import Partner from "./Partner";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  line: {
    backgroundColor: "#868e96",
    height: "0.5px",
    width: "8%",
    margin: "36px auto",
    color: "#d3d3d3",
  },
}));

const partnersRow1 = [
  // { id: 1, logoUrl: "/partner/logo-1.webp" },
  // { id: 2, logoUrl: "/partner/logo-2.webp" },
  // { id: 3, logoUrl: "/partner/logo-3.webp" },
  // { id: 4, logoUrl: "/partner/logo-4.webp" },
  // { id: 5, logoUrl: "/partner/logo-5.webp" },
  // { id: 6, logoUrl: "/partner/logo-6.webp" },
  // { id: 7, logoUrl: "/partner/logo-7.webp" },
  // { id: 8, logoUrl: "/partner/logo-8.webp" },
  // { id: 9, logoUrl: "/partner/logo-9.webp" },
  // { id: 10, logoUrl: "/partner/logo-10.webp" },
  // { id: 11, logoUrl: "/partner/logo-11.webp" },
];

const partnersRow2 = [
  // { id: 12, logoUrl: "/partner/logo-12.webp" },
  // { id: 13, logoUrl: "/partner/logo-13.webp" },
  // { id: 14, logoUrl: "/partner/logo-14.webp" },
  // { id: 15, logoUrl: "/partner/logo-15.webp" },
  // { id: 16, logoUrl: "/partner/logo-16.webp" },
  // { id: 17, logoUrl: "/partner/logo-17.webp" },
  // { id: 18, logoUrl: "/partner/logo-18.webp" },
  // { id: 19, logoUrl: "/partner/logo-19.webp" },
  // { id: 20, logoUrl: "/partner/logo-20.webp" },
  // { id: 21, logoUrl: "/partner/logo-21.webp" },
  // { id: 22, logoUrl: "/partner/logo-22.webp" },
];

const Partners = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={6}>
          <Typography 
            variant="h2" 
            align="center"
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              justifyContent: "center",
              fontWeight: "bold",
            }}
            gutterBottom>
            파트너
          </Typography>
          <div className={classes.line}></div>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} md={10} lg={8}>
          <Marquee speed={100} pauseOnHover style={{ height: "140px", overflow: "hidden", paddingTop: 60, paddingBottom: 0  }}>
            <div style={{ display: "flex" }}>
              {partnersRow1.map((partner, index) => (
                <div style={{ marginRight: index !== partnersRow1.length - 1 ? "0" : "0" }}>
                  <Partner
                    key={partner.id}
                    logoUrl={partner.logoUrl}
                    name={partner.name}
                    description={partner.description}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee speed={100} pauseOnHover style={{ height: "140px",  overflow: "hidden", paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ display: "flex" }}>
              {partnersRow2.map((partner, index) => (
                <div style={{ marginRight: index !== partnersRow2.length - 1 ? "0" : "0" }}>
                  <Partner
                    key={partner.id}
                    logoUrl={partner.logoUrl}
                    name={partner.name}
                    description={partner.description}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </Grid>
      </Grid>
    </div>
  );
};

export default Partners;
