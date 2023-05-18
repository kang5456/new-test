import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const FileDownloadButton = ({ fileUrl, fileName }) => {
  const classes = useStyles();

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <IconButton className={classes.button} href={fileUrl} download={fileName}>
      <GetApp />
    </IconButton>
  );
};

export default FileDownloadButton;
