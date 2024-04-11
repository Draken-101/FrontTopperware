import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../Data/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { Product } from "../../../../Datos/Datos.Products";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { useState } from "react";
import { InputsAddProductStyle } from "../../Data/Datos.InputsAddProductStyle";
import { ProductStyle } from "../../../../Datos/Datos.ProductsStyles";
import { ValoresAddProduct } from "../../Data/Datos.ValoresAddProduct";
export function FormAddProduct({ AddProduct, TypeCards, ClaveActual, Valores }) {
    return (
        <Formik
            initialValues={ValoresAddProduct('', '', '')}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={(values, { resetForm }) => {
                let newProduct = new Product(
                    values.clave,
                    values.nombre,
                    0,
                    values.tipo
                )
                AddProduct(newProduct);

                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControlsProducts">
                <InputsGenerator Inputs={InputsAddProduct} />
                <div className="B-Form">
                    <ButtonPurple type="submit">
                        Agregar
                    </ButtonPurple>
                </div>
            </Form>
        </Formik>
    );
}
