import { Form, Formik } from "formik";
import { ValoresAddProducts } from "../../../../Datos/Datos.ValoresAddProducts";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../../../Datos/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../../../Datos/Datos.ValidacionesAddProduct";
export function FormAddProducts({ }) {
    return (
        <Formik
            initialValues={ValoresAddProducts}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={({ resetForm }) => {
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControls">
                <InputsGenerator Inputs={InputsAddProduct} />
                <div className="B-Form">
                    <ButtonPurple>
                        Agregar
                    </ButtonPurple>
                </div>
            </Form>
        </Formik>
    );
}
