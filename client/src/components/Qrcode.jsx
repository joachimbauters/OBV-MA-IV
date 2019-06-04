import React from "react";
import QrCode from "qrcode.react";

const Qrcode = ({ code }) => {
  const link = (type, voertuignummer, stoelnummer) => {
    const link = `https://www.operaballet.be/${type}/${voertuignummer}/${stoelnummer}`;
    return link;
  };
  return (
    <>
      <QrCode value={link(code.type, code.voertuignummer, code.stoelnummer)} />
    </>
  );
};

export default Qrcode;
