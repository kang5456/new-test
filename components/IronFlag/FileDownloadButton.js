import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  downloadBtnBox : {
    padding :"10px 5px", 
    margin:"50px 0 0 0 ",
    "&:hover" : {
      backgroundColor : "rgba(0,0,0,0)",
    } 
  },
  downloadBtnBoxView : {
    margin:"0",
  },
  downloadBtn : {
    borderRadius : "20px",
    backgroundColor : "rgba(0,0,0,0)",
    fontSize : "12px",
    display:"flex",
  }
}));


const FileDownloadButton = ({ fileUrl, fileName }) => {
  const classes = useStyles();
  const downloadBtnView = useMediaQuery({query : "(min-width:768px"});

  return (
    <IconButton className={`${downloadBtnView ?classes.downloadBtnBox :classes.downloadBtnBoxView }`} href={fileUrl} download={fileName} >
      <button className={classes.downloadBtn} ><SaveAlt /><span>download</span></button>
    </IconButton>
  );
};

export default FileDownloadButton;