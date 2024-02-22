import React, { useState, useEffect } from "react";
import { Document, Page, Image, View, StyleSheet } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    // flexWrap:'wrap',
    // flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    // : "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  view: {
    display: "flex",
    // flexWrap:'wrap',
    // flexDirection: "row",
    justifyContent: "flex-start",
    // : "flex-start",

    // width: "100%"
  },
  qrImage: {
    width: "160px",
    height: "160px",
    // display: "flex",
    // flexWrap:'wrap',
  },
});

function QRCodePage({ id }) {
  const [dataUrl, setDataUrl] = useState();

  // let  dataUrl = document.getElementById(id).toDataURL()  ?? '';

  useEffect(() => {
    html2canvas(document.getElementById(id)).then((canvas) => {
      setDataUrl(canvas.toDataURL());
      document.body.appendChild(canvas);
    });
  }, []);

  return (
    <Page key={`page_${id}`} size="A4" style={styles.page}>
      {new Array(29).fill("").map(() => (
        <Image allowDangerousPaths src={dataUrl} style={styles.qrImage} />
      ))}
    </Page>
  );
}

function QRCodeDocument({ ids }) {
  return (
    <Document>
      {ids.map((id) => (
        <QRCodePage id={id} />
      ))}
    </Document>
  );
}
export default QRCodeDocument;
