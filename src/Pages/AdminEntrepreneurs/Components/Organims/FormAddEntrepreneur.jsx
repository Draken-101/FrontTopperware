import { Form, Formik } from "formik";
import { ValoresAddEntrepreneurs } from "../../Datos/Datos.ValoresAddEntrepreneurs";
import './FormAddEntrepreneur.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddEntrepreneurs } from "../../Datos/Datos.InputsAddEntrepreneurs";
import { InputsAddEntrepreneursTip } from "../../Datos/Datos.InputsAddEntrepreneursTip";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddEntrepreneurs } from "../../Datos/Datos.ValidacionesAddEntrepreneurs";
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackHandIcon from '@mui/icons-material/BackHand';
import { useNavigate } from "react-router";
import axios from "axios";
import { Add } from "../../Datos/Datos.Valores";
export function FormAddEntrepreneur({ AddEntrepreneur, TipActual, openForm, onOffCarga }) {
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
            initialValues={ValoresAddEntrepreneurs}
            validate={(v) => ValidacionesAddEntrepreneurs(v)}
            onSubmit={async (values, { resetForm }) => {
                onOffCarga(true)
                const formData = new FormData();
                formData.append("nombres", values.nombres);
                formData.append("numeroCliente", values.numeroCliente);
                formData.append("phone", values.phone.replace(/\s+/g, ''));
                formData.append("apellidos", values.apellidos);
                formData.append("tip", TipActual);
                formData.append("semana1", values.semana1 || 0);
                formData.append("semana2", values.semana2 || 0);
                formData.append("semana3", values.semana3 || 0);
                formData.append("totalVenta", (values.semana1 || 0) + (values.semana2 || 0) + (values.semana3 || 0));
                if (imgFile) {
                    formData.append("img", imgFile, imgFile.name)
                } else {
                    formData.append("img", "/assets/Img/Minnie.jpg");
                }
                try {
                    let headers = {
                            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                            'token':  localStorage.getItem('token')
                        }
                    let res = await axios.post('http://3.135.157.51:27017/api/emprendedoras', formData, {headers: headers});
                    if(res.data.error){
                        navigate('/Login')
                    } else if (res.data.existe) {
                        AddEntrepreneur(Add('Delete', res.data.message, () => <BackHandIcon/>))
                    } else {
                        resetForm();
                        AddEntrepreneur(Add('Add', res.data.message, () => <CheckCircleIcon/>))
                    } 
                } catch (error) {
                    console.log('Error en la solicitud POST:', error);
                }
                onOffCarga(false)
                setImg(null)
                console.log('Formulario enviado');
            }}>
            <Form className={`FormAdminControlsEntrepreneur ${openForm ? 'visible' : ''}`}>
                <InputsGenerator Inputs={InputsAddEntrepreneurs} />
                <h2>Tip {TipActual}</h2>
                <InputsGenerator Inputs={InputsAddEntrepreneursTip} />
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
