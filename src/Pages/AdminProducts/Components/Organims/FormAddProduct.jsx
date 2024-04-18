import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../Data/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { ValoresAddProduct } from "../../Data/Datos.ValoresAddProduct";
import axios from "axios";
import { Add } from "../../Data/Datos.Valores";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackHandIcon from '@mui/icons-material/BackHand';
export function FormAddProduct({ AddProduct }) {
    return (
        <Formik
            initialValues={ValoresAddProduct('', '', '')}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={ async (values, { resetForm }) => {
                let newProduct = JSON.stringify({
                    clave: values.clave,
                    nombre: values.nombre,
                    cantidad: 0,
                    tipo: values.tipo
                })
                let headers = {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
                await axios.post('http://localhost:3000/api/products', newProduct, {
                    headers: headers
                } )
                .then(res => {
                    if(res.data.error){
                        navigate('/Login')
                    } else if (res.data.existe) {
                        AddProduct(Add('Delete', res.data.message, () => <BackHandIcon/>))
                    } else {
                        AddProduct(Add('Add', res.data.message, () => <CheckCircleIcon/>))
                    } 
                })
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
