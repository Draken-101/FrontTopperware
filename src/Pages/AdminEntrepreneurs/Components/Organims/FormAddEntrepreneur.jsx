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
import { CalcularTotalVenta } from "../../../../Datos/Datos.Entrepreneurs";
import { usePost } from "../../../../Fetching/usePost";
import { useNavigate } from "react-router";
export function FormAddEntrepreneur({ AddEntrepreneur, TipActual }) {
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
                const formData = new FormData();
                formData.append("nombres", values.nombres);
                formData.append("numeroCliente", values.numeroCliente);
                formData.append("apellidos", values.apellidos);
                formData.append("tip", TipActual);
                formData.append("semana1", values.semana1 || 0);
                formData.append("semana2", values.semana2 || 0);
                formData.append("semana3", values.semana3 || 0);
                formData.append("totalVenta", (values.semana1 || 0) + (values.semana2 || 0) + (values.semana3 || 0))
                console.log(imgFile)
                if (imgFile) {
                    formData.append("img", imgFile, imgFile.name)
                } else {
                    formData.append("img", "/assets/Img/Minnie.jpg");
                }
                try {
                    let res = await fetch('http://localhost:3000/api/emprendedoras', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                            'token':  localStorage.getItem('token')
                        },
                        body:  formData
                    });
                    !res.ok ? navigate('/Login') : console.log(res);
                } catch (error) {
                    console.log('Error en la solicitud POST:', error);
                }
                setImg(null)
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControlsEntrepreneur">
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
