import React from "react";
// import QRCode from "/qrcode.react";
import { QRCode } from "antd";

const QRGenerator = (props) => {
  const { value, documentId } = props;
  return (
    <div
      id={documentId}
      style={{
        width: "170px",
        height: "200px",
        padding: "8px",

        // marginTop:'40px'
      }}
    >
      <div>
        <QRCode
          errorLevel="H"
          value="https://ant.design/"
          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px auto",
          }}
        >
          {" "}
          11111
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
