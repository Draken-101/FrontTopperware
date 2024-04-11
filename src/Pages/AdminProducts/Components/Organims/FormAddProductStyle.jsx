import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { useState } from "react";
import { InputsAddProductStyle } from "../../Data/Datos.InputsAddProductStyle";
import { ValoresAddProductStyle } from "../../Data/Datos.ValoresAddProductStyle";
export function FormAddProductStyle({ AddProduct, ClaveActual }) {
    const [img, setImg] = useState(null)
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
            initialValues={ValoresAddProductStyle('', '', '', '', '', )}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={(values, { resetForm }) => {
                const newStyle = {
                    clave:`${ClaveActual}-${values.nombre}`,
                    nombre: values.nombre || '',
                    cantidad: values.cantidad || 0,
                    precio: values.precio || 0,
                    categoria: values.categoria || '',
                    descripcion: values.descripcion || '',
                    img: img || 'https://cdn01.tupp.win/img/p/es-default-default_md.jpg'
                }
                AddProduct(newStyle);
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControlsProducts">
                <InputsGenerator Inputs={InputsAddProductStyle} />
                <h2> Agregar foto </h2>
                <InputAddProfile Change={change} Img={img} />
                <div className="B-Form">
                    <ButtonPurple type="submit">
                        Agregar
                    </ButtonPurple>
                </div>
            </Form>
        </Formik>
    );
}
