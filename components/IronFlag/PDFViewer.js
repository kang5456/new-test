import React, { useEffect, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { makeStyles } from "@material-ui/core/styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles((theme) => ({
  pdfContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: theme.spacing(2),
    backgroundColor: "#fafafa",
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
    height: "auto",
  },
}));

const PDFViewer = ({ fileUrl }) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.pdfContainer}>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PDFViewer;