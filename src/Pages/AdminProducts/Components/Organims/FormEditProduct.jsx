import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../../../Datos/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../../../Datos/Datos.ValidacionesAddProduct";
export function FormEditProduct({ Product }) {
    return (
        <Formik
            key={Product.clave}
            initialValues={{
                nombre:Product.nombre,
                clave:Product.clave,
            }}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={({ resetForm }) => {
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControls" id="form">
                <InputsGenerator Inputs={InputsAddProduct} />
                <div className="B-Form">
                    <ButtonPurple >
                        Modificar
                    </ButtonPurple>
                </div>
            </Form>
        </Formik>
    );
}
