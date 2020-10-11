import React from "react";
import "./LoadingCircle.scss";
import loadingCircle from "../../assets/loadingCircle.png";

const LoadingCircle = () => {
  return (
    <div className="loading-circle">
      <img
        src={loadingCircle}
        alt="loading icon"
        className="loading-circle__circle"
      />
    </div>
  );
};

export default LoadingCircle;
