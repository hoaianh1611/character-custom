import React from "react";

function BodyPic({ parts, index, picNum }) {
  return (
    <img
      className="ava-img"
      src={`character/${parts}/${picNum}.png`}
      alt=""
      width={"260"}
      style={{ zIndex: index }}
    />
  );
}

export default BodyPic;
