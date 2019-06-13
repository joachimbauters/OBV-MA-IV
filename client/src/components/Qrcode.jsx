import React from "react";
import QrCode from "qrcode.react";

const Qrcode = ({ code }) => {
  const link = (type, voertuignummer, stoelnummer) => {
    const link = `https://operaonwheels.herokuapp.com/application/${type}/${voertuignummer}/${stoelnummer}`;
    return link;
  };
  return (
    <>
      <QrCode
        value={link(code.type, code.voertuignummer, code.stoelnummer)}
        bgColor="transparent"
        fgColor="#FFFFFF"
      />
    </>
  );
};

export default Qrcode;
