import { Form, Formik } from "formik";
import './FormAddProducts.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddProduct } from "../../Data/Datos.ValidacionesAddProduct";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { useState } from "react";
import { InputsAddProductStyle } from "../../Data/Datos.InputsAddProductStyle";
import { ValoresAddProductStyle } from "../../Data/Datos.ValoresAddProductStyle";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackHandIcon from '@mui/icons-material/BackHand';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Add } from "../../Data/Datos.Valores";
export function FormAddStyle({ AddStyle, ClaveActual, onOffCarga }) {
    const [img, setImg] = useState(null);
    const [imgFile, setImgFile] = useState(null);
    const navigate = useNavigate();
    const change = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result)
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setImgFile(e.target.files[0]);
        } else {
            setImg('');
            setImgFile(null);
        }
    }
    return (
        <Formik
            initialValues={ValoresAddProductStyle('', '', '', '', '',)}
            validate={(v) => ValidacionesAddProduct(v)}
            onSubmit={async (values, { resetForm }) => {
                const formData = new FormData();
                formData.append("nombre", values.nombre || "");
                formData.append("clave", `${ClaveActual}-${values.nombre}`);
                formData.append("cantidad", values.cantidad);
                formData.append("precio", values.precio);
                formData.append("categoria", values.categoria);
                formData.append("descripcion", values.descripcion);
                if (imgFile) {
                    formData.append("img", imgFile, imgFile.name)
                } else {
                    formData.append("img", "/assets/Img/Minnie.jpg");
                }
                try {
                    let headers = {
                        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                        'token': localStorage.getItem('token')
                    }
                    onOffCarga(true);
                    let res = await axios.post('http://localhost:3000/api/estilos', formData, { headers: headers });
                    onOffCarga(false);
                    if (res.data.error) {
                        navigate('/Login')
                    } else if (res.data.existe) {
                        AddStyle(Add('Delete', res.data.message, () => <BackHandIcon />))
                    } else {
                        AddStyle(Add('Add', res.data.message, () => <CheckCircleIcon />))
                    }
                } catch (error) {
                    navigate('/Login');
                    console.log('Error en la solicitud POST:', error);
                }

                setImg(null)
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
