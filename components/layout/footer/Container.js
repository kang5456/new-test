import React, { useState, useEffect } from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import Social from 'components/Social';



const FootComponent = ({classes}) => {


  return (
    <Container maxWidth="lg">
      <img
        src="/STI_W.png"
        alt="logo"
        style={{
          width: '140px',
          position: 'relative',
          marginTop: '15px',
        }}
      />
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography
            className={classes.copylight}
            style={{
              textAlign: 'center',
              fontSize: '12px',
              marginTop: '-20px',
            }}
          >
            <div style={{color: 'gray', marginBottom: '0px'}}>
              이 사이트는 블록체인 기술과 소식을 공유하기 위한 비영리적 목적으로
              운영됩니다.
            </div>
            <div>&copy;2023 CrossCheck All Rights Reserved.</div>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid
            item
            style={{
              textAlign: 'right',
              marginTop: '-60px',
              marginRight: '50px',
            }}
          >
            <Social />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FootComponent;