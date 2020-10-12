import React, { useState, useEffect } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddProductForm.scss";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/actions";
import { formatPrice } from "../../../utils/formatPrice";

interface FormValues {
  name: string;
  price: number;
}

interface Iprops {
  addProduct: Function;
}

const AddProductForm = (props: Iprops) => {
  const registerFormValidator = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório."),
    price: Yup.number()
      .min(1, "Valor mínimo de R$ 1,00")
      .required("Informe o valor do produto"),
  });

  const formik = useFormik({
    initialValues: { name: "", price: 0 },
    validationSchema: registerFormValidator,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        props.addProduct(values);
        actions.setSubmitting(false);
        actions.resetForm();
        setMaskedPrice("");
        setcustomValue(0);
      }, 800);
    },
  });

  const {
    handleSubmit,
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    setFieldValue,
  } = formik;

  const [customValue, setcustomValue] = useState(0);
  const [maskedPrice, setMaskedPrice] = useState("");

  useEffect(() => {
    setFieldValue("price", customValue);
  }, [customValue, setFieldValue]);

  function maskPrice(price: number) {
    console.log(formatPrice(price.toString()));
    setMaskedPrice(formatPrice(price.toString()));
    setcustomValue(price);
  }
  return (
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
        error={touched.name && !!errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        label="Preço"
        name="price"
        type="text"
        caption={touched.price ? errors.price : ""}
        error={touched.price && !!errors.price}
        value={maskedPrice}
        onChange={(e) => {
          let userInput = e.target.value.replace(/\D/g, "");
          console.log(userInput);
          maskPrice(parseInt(userInput));
        }}
        onBlur={handleBlur}
      />
      <Button
        label="Cadastrar"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        type="submit"
      />
    </form>
  );
};
export default connect(null, { addProduct })(AddProductForm);
