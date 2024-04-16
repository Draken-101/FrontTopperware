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
export function FormAddEntrepreneur({ AddEntrepreneur, TipActual }) {
    const [img, setImg] = useState(null);
    const [imgFile, setImgFile] = useState(null);
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
                const Tip = {
                    tip: TipActual,
                    semana1: values.semana1 || 0,
                    semana2: values.semana2 || 0,
                    semana3: values.semana3 || 0
                };
                if (imgFile) {
                    var reader = new FileReader()
                    reader.readAsDataURL(imgFile)
                    reader.onload = async () => {
                        var rawLog = reader.result.split(',')[1];
                        var dataSend = { dataReq: { data: rawLog, name: values.numeroCliente, type: imgFile.type }, fname: values.numeroCliente };
                        await fetch('https://script.google.com/macros/s/AKfycbw9Pe0yfaizyVNrbQc5c5p1muvatK9RIRGA-s9cRS2YXGT__l_PoF_4Qf4dWLx0mu8LGA/exec',
                            { method: "POST", body: JSON.stringify(dataSend) })
                            .then(res => res.json()).then((res) => {
                                setImgFile(res.json().url)
                                console.log(res.json().url)
                            }).catch(error => console.log(error))
                    }
                } else {
                    setImgFile('/assets/Img/Minnie.jpg')
                }
                AddEntrepreneur(JSON.parse({
                    nombres: values.nombres,
                    numeroClient: values.numeroCliente,
                    apellidos: values.apellidos,
                    tips: [Tip],
                    totalVenta: CalcularTotalVenta([Tip]),
                    img: imgFile
                }))
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
