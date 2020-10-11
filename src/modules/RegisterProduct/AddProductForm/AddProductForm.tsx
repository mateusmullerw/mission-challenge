import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import "./AddProductForm.scss";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/actions";

interface FormValues {
  name: string;
  price: number;
}

interface Iprops {
  addProduct: Function;
}

const AddProductForm = (props: Iprops) => {
  const initialValues: FormValues = { name: "", price: 0 };

  const registerFormValidator = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório."),
    price: Yup.number()
      .min(1, "Valor mínimo de R$ 1,00")
      .required("Informe o valor do produto"),
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerFormValidator}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          props.addProduct(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }, 800);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            label="Nome"
            name="name"
            type="text"
            caption={touched.name ? errors.name : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Input
            label="Preço"
            name="price"
            type="number"
            caption={touched.price ? errors.price : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          <Button label="Cadastrar" isLoading={isSubmitting} disabled={isSubmitting} type="submit" />
        </form>
      )}
    </Formik>
  );
};
export default connect(null, { addProduct })(AddProductForm);
