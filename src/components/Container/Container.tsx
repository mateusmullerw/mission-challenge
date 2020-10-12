import React from "react";
import "./Container.scss";

const Container = (props: {children: object}) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
