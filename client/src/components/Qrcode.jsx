import React from "react";
import QrCode from "qrcode.react";

const Qrcode = ({ code }) => {
  const link = (type, voertuignummer, stoelnummer) => {
    const link = `http://145.137.64.130:3000/application/${type}/${voertuignummer}/${stoelnummer}`;
    return link;
  };
  return (
    <>
      <QrCode value={link(code.type, code.voertuignummer, code.stoelnummer)} />
    </>
  );
};

export default Qrcode;
