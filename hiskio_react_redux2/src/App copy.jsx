/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QRGenerator from "./QRGenerator";
import QRCodeDocument from "./QRCodeDocument";

export default function App() {
  const qrCodeData = [
    { id: 1234, value: "TEST1" },
    { id: 1235, value: "TEST2" },
  ];
  const qrCodeIds = qrCodeData.map((data) => data.id);

  const repeatLog = (n, action) => {
    for (let i = 0; i < n; i++) {
      // console.log('actionI', i)
      action(i);
    }
  };

  let labels = [];
  repeatLog(5, (i) => {
    // console.log('i',i)
    labels.push(`Unit${i + 1}`);
  });

  // --------------------------------------------------

  const taskList = [
    {
      id: 0,
      title: "Buy Avocado",
      status: "pending",
      dueDate: "2020-05-31",
    },
    {
      id: 1,
      title: "Clean house",
      status: "complete",
      dueDate: "2020-05-21",
    },
    {
      id: 2,
      title: "Implement js Array filter",
      status: "pending",
      dueDate: "2019-05-21",
    },
  ];

  const Filter = (array, fn) => {
    let filterTask = [];
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        filterTask.push(array[i]);
      }
    }
    return filterTask;
  };
  const filter1 = Filter(
    taskList,
    (list) => list.status === "pending" && list.dueDate === "2020-05-31"
  );

  console.log("filter1", filter1);

  let array = [1, 2, 3];
  const a = array.reduce((accr, current) => console.log(accr, current));

  console.log("a", a);
  return (
    <>
      <div className="App">
        {qrCodeData.map((data) => {
          return <QRGenerator value={data.value} documentId={data.id} />;
        })}
      </div>

      <div style={{ margin: 100 }}>
        <PDFDownloadLink
          document={<QRCodeDocument ids={qrCodeIds || ""} />}
          fileName="qrcode.pdf"
        >
          {({ loading }) => (loading ? "Loading..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </>
  );
}
