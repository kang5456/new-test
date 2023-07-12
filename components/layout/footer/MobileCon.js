import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import Social from 'components/Social';



const MFootComponent = ({classes}) => {


  return (
    <Container maxWidth="lg">
      <img
        src="/STI_W.png"
        alt="logo"
        style={{
          width: '150px',
          position: 'relative',
          marginTop: '-20px',
        }}
      />
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography
            className={classes.copylight}
            style={{
              textAlign: 'center',
              fontSize: '12px',
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
              marginTop: '-130px',
              marginRight: '10px',
            }}
          >
            <Social />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MFootComponent;