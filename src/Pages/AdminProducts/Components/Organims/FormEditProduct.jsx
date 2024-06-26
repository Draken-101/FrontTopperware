import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddProduct } from "../../Data/Datos.InputsAddProduct";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ValoresAddProduct } from "../../Data/Datos.ValoresAddProduct";
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackHandIcon from '@mui/icons-material/BackHand';
import { Add } from "../../Data/Datos.Valores";
export function FormEditProduct({ Product, DeleteProduct, Alert, Update, onOffCarga }) {
    return (
        <Formik
            key={Product.clave}
            initialValues={ValoresAddProduct(Product.nombre, Product.clave, Product.tipo)}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={async (values, { resetForm }) => {
                if (Product.nombre === values.nombre && Product.clave === values.clave && Product.tipo === values.tipo) {
                    Alert(Add('Delete', "Producto sin modificar.", () => <BackHandIcon />));
                } else {
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
                    onOffCarga(true);
                    await axios.put(`http://3.135.157.51:27017/api/products/${Product.clave}`, newProduct, {
                        headers: headers
                    })
                        .then(res => {
                            if (res.data.error) {
                                navigate('/Login')
                            } else if (res.data.existe) {
                                Alert(Add('Delete', res.data.message, () => <BackHandIcon />));
                            } else {
                                resetForm();
                                Update();
                                Alert(Add('Add', res.data.message, () => <CheckCircleIcon />))
                            }
                        })

                    onOffCarga(false);
                    console.log('Formulario enviado');
                }
            }}>
            <Form className="FormAdminControlsProducts" id="form">
                <InputsGenerator Inputs={InputsAddProduct} />
                <div className="B-Form EditForm">
                    <ButtonPurple type="submit" className="EditBtn" >
                        Modificar
                    </ButtonPurple>
                    <ButtonPinkRed onClick={() => DeleteProduct(Product.clave)} type="button" className="DeleteBtn">
                        Eliminar
                    </ButtonPinkRed>
                </div>
            </Form>
        </Formik>
    );
}
