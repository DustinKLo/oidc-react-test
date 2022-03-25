import React from "react";

import loader from "../img/Loading.svg";

export default function () {
  return (
    <div style={{ fontSize: 32, padding: 30, textAlign: "center" }}>
      Loading...
      <img
        style={{
          animation: "spin 4s linear infinite",
          paddingLeft: 10,
          paddingRight: 10,
        }}
        src={loader}
      />
    </div>
  );
}
