import { Form, Formik } from "formik";
import { useEffect, useState } from 'react';
import './FormAddEntrepreneur.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddEntrepreneurs } from "../../Datos/Datos.InputsAddEntrepreneurs";
import { InputsAddEntrepreneursTip } from "../../Datos/Datos.InputsAddEntrepreneursTip";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ValoresEditEntrepreneurs } from "../../Datos/Datos.ValoresEditEntrepreneurs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Add } from "../../Datos/Datos.Valores";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import BackHandIcon from '@mui/icons-material/BackHand';
import { ValidacionesAddEntrepreneurs } from "../../Datos/Datos.ValidacionesAddEntrepreneurs";
export function FormEditEntrepreneur({ Entrepreneur, TipActual, DeleteUser, Update, Alert, Tip, openForm, onOffCarga }) {
    const [img, setImg] = useState(null);
    const [imgFile, setImgFile] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        setImg(Entrepreneur.img)
    }, [Entrepreneur])
    const change = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result)
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setImgFile(e.target.files[0]);
        } else
            setImg('');
    }
    return (
        <Formik
            key={Entrepreneur.numeroCliente}
            initialValues={ValoresEditEntrepreneurs(Entrepreneur, Tip)}
            validate={(v) => ValidacionesAddEntrepreneurs(v)}
            onSubmit={async (values, { resetForm }) => {
                onOffCarga(true)
                if (values.nombres === Entrepreneur.nombres
                    && values.apellidos === Entrepreneur.apellidos
                    && values.email === Entrepreneur.email
                    && values.phone === Entrepreneur.phone
                    && values.numeroCliente === Entrepreneur.numeroCliente
                    && values.semana1 === Tip.semana1
                    && values.semana2 === Tip.semana2
                    && values.semana3 === Tip.semana3
                    && values.img === Entrepreneur.img) {
                        Alert(Add('Delete', "Emprendedora sin modificar.", () => <BackHandIcon />));
                } else {
                    const Tips = JSON.stringify([...Entrepreneur.tips.filter((tip) => tip.tip !== TipActual)]);
                    const formData = new FormData();
                    formData.append('tips', Tips)
                    formData.append("nombres", values.nombres);
                    formData.append("numeroCliente", values.numeroCliente);
                    formData.append("apellidos", values.apellidos);
                    formData.append("tip", TipActual);
                    formData.append("semana1", values.semana1 || 0 );
                    formData.append("semana2", values.semana2 || 0 );
                    formData.append("semana3", values.semana3 || 0 );
                    formData.append("totalVenta", ( values.semana1 || 0 ) + (values.semana2 || 0 ) + (values.semana3 || 0 ))
                    if (imgFile) {
                        formData.append("img", imgFile, imgFile.name)
                    } else {
                        formData.append("img", Entrepreneur.img ? Entrepreneur.img : "/assets/Img/Minnie.jpg");
                    }
                    try {
                        let headers = {
                            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                            'token': localStorage.getItem('token')
                        }
                        await axios.put(`http://3.135.157.51:27017/api/emprendedoras/${Entrepreneur.numeroCliente}`, formData, { headers: headers })
                            .then(res => {
                                if (res.status !== 200) {
                                    navigate('/Login')
                                } else if (res.data.existe) {
                                    Alert(Add('Delete', res.data.message, () => <BackHandIcon />));
                                } else {
                                    Update()
                                    resetForm();
                                    Alert(Add('Add', res.data.message, () => <DoneOutlineIcon />));
                                    setImg(null)
                                }
                            });
                    } catch (error) {
                        console.log('Error en la solicitud PUT:', error);
                    }
                    onOffCarga(false);
                    console.log('Formulario enviado');
                }
            }}>
            <Form className={`FormAdminControlsEntrepreneur ${openForm ? 'visible' : ''}`} id="form">
                <InputsGenerator Inputs={InputsAddEntrepreneurs} />
                <h2>Tip {TipActual}</h2>
                <InputsGenerator Inputs={InputsAddEntrepreneursTip} />
                <h2> Cambiar foto </h2>
                <InputAddProfile Img={img} Change={change} />
                <div className="B-Form EditForm">
                    <ButtonPurple className="EditBtn" type="submit">
                        Modificar
                    </ButtonPurple>
                    <ButtonPinkRed onClick={() => DeleteUser(Entrepreneur.numeroCliente)} type="button" className="DeleteBtn">
                        Eliminar
                    </ButtonPinkRed>
                </div>
            </Form>
        </Formik>
    );
}
