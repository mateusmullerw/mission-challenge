import React from "react";
import AddProductForm from "./AddProductForm/AddProductForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./RegisterProduct.scss";

export default function RegisterProduct() {
  return (
    <div>
      <PageTitle title="Cadastrar produto" />
      <AddProductForm />
    </div>
  );
}
