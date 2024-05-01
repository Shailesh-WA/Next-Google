import React from "react";
import GoogleAd from "../component/googleAd";

const index = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Google
        <GoogleAd dataAdSlot="1234567890" />
      </h1>
    </div>
  );
};

export default index;
