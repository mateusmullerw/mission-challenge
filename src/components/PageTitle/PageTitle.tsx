import React from "react";
import "./PageTitle.scss";

interface IPageTitleProps {
  title: string;
}

const PageTitle = (props: IPageTitleProps) => {
  const { title } = props;

  return <h1 className="page-title">{title}</h1>;
};

export default PageTitle;
