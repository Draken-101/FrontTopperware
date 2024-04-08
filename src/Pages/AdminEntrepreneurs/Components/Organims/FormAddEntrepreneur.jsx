import { Form, Formik } from "formik";
import { ValoresAddEntrepreneurs } from "../../../../Datos/Datos.ValoresAddEntrepreneurs";
import './FormAddEntrepreneur.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddEntrepreneurs } from "../../../../Datos/Datos.InputsAddEntrepreneurs";
import { InputsAddEntrepreneursTip } from "../../../../Datos/Datos.InputsAddEntrepreneursTip";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddEntrepreneurs } from "../../../../Datos/Datos.ValidacionesAddEntrepreneurs";
import { useState } from "react";
import { Entrepreneur } from "../../../../Datos/Datos.Entrepreneurs";
export function FormAddEntrepreneur({ AddEntrepreneur, TipActual }) {
    const [img, setImg] = useState('')
    const change = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result)
            console.log(img);
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        } else
            setImg('');
    }
    return (
        <Formik
            initialValues={ValoresAddEntrepreneurs}
            validate={(v) => ValidacionesAddEntrepreneurs(v)}
            onSubmit={(values, { resetForm }) => {
                const Tip = {
                            tip: TipActual,
                            semana1: values.semana1,
                            semana2: values.semana2,
                            semana3: values.semana3,
                        };
                const newEntrepreneur = new Entrepreneur(
                    // nombres, apellidos, numeroCliente, top, totalVenta, tips, img
                    values.nombres,
                    values.apellidos,
                    values.numeroCliente,
                    0,
                    [Tip],
                    img || "src/assets/Img/Minnie-perfil.png"

                )
                newEntrepreneur.CalcularTotalVenta(Tip)
                console.log(newEntrepreneur);
                AddEntrepreneur(newEntrepreneur)
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControls">
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
