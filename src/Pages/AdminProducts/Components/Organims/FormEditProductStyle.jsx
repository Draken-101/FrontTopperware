import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../Data/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { Product } from "../../../../Datos/Datos.Products";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { ValoresAddProduct } from "../../Data/Datos.ValoresAddProduct";
import { ValoresAddProductStyle } from "../../Data/Datos.ValoresAddProductStyle";
import { useState } from "react";
import { InputsAddProductStyle } from "../../Data/Datos.InputsAddProductStyle";
import { ProductStyle } from "../../../../Datos/Datos.ProductsStyles";
export function FormEditProductStyle({ ProductE, DeleteProduct, Update }) {
    const [img, setImg] = useState(ProductE.img || null)
    const change = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result)
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        } else
            setImg('');
    }
    return (
        <Formik
            key={Product.clave}
            initialValues={ValoresAddProductStyle(
                ProductE.nombre,
                ProductE.cantidad,
                ProductE.precio,
                ProductE.categoria,
                ProductE.descripcion
            )}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={(values, { resetForm }) => {
                let newStyle = new ProductStyle(
                    `${ProductE.getClave()}-${values.nombre}`,
                    values.nombre,
                    values.cantidad,
                    values.precio,
                    values.categoria,
                    values.descripcion,
                    img || 'https://cdn01.tupp.win/img/p/es-default-default_md.jpg'
                )
                console.log(newStyle);
                Update(newStyle, newStyle.getClave())

                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControlsProducts" id="form">
                <InputsGenerator Inputs={InputsAddProductStyle} />
                            <h2> Agregar foto </h2>
                            <InputAddProfile Change={change} Img={img} />
                <div className="B-Form EditForm">
                    <ButtonPurple type="submit" className="EditBtn" >
                        Modificar
                    </ButtonPurple>
                    <ButtonPinkRed onClick={() => DeleteProduct()} type="button" className="DeleteBtn">
                        Eliminar
                    </ButtonPinkRed>
                </div>
            </Form>
        </Formik>
    );
}
