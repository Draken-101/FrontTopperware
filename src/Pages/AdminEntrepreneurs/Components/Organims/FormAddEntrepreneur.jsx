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
        } else{
            setImg('');
            setImgFile(null);
        }
    }
    return (
        <Formik
            initialValues={ValoresAddEntrepreneurs}
            validate={(v) => ValidacionesAddEntrepreneurs(v)}
            onSubmit={ async (values, { resetForm }) => {
                const Tip = {
                    tip: TipActual,
                    semana1: values.semana1 || 0,
                    semana2: values.semana2 || 0,
                    semana3: values.semana3 || 0
                };
                AddEntrepreneur({
                    nombres: values.nombres,
                    numeroCliente: values.numeroCliente,
                    apellidos: values.apellidos,
                    tips:[Tip],
                    totalVenta: CalcularTotalVenta([Tip]),
                    img: imgFile || "/assets/Img/Minnie.jpg"
                })
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
