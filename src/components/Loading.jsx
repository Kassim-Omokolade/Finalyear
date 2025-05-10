import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: `calc(100vh - 15px)` }}
    >
      <RotatingLines
        strokeColor="#002b5b"
        strokeWidth="1"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loading;
