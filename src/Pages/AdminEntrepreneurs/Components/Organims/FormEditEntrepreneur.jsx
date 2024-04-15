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
import { ValidacionesEditEntrepreneurs } from "../../Datos/Datos.ValidacionesEditEntrepreneurs";
export function FormEditEntrepreneur({ Entrepreneur, TipActual, DeleteUser, Update, Tip }) {
    const [img, setImg] = useState(null)
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
        } else
            setImg('');
    }
    return (
        <Formik
            key={Entrepreneur.numeroCliente}
            initialValues={ValoresEditEntrepreneurs(Entrepreneur, Tip)}
            validate={(v) => ValidacionesEditEntrepreneurs(v)}
            onSubmit={(values, { resetForm }) => {
                let newTip = {
                    tip: TipActual,
                    semana1: values.semana1,
                    semana2: values.semana2,
                    semana3: values.semana3
                }
                let totalVenta = (values.semana1 || 0) + (values.semana2 || 0) + (values.semana3 || 0);
                let Tips = [];
                if (Entrepreneur.tips.length > 0) {
                    Tips = [...Entrepreneur.tips.filter((tip) => tip.tip !== TipActual)]
                } else {
                    totalVenta = newTip.semana1 + newTip.semana2 + newTip.semana3;
                }
                Tips.push({ ...newTip })

                Update({
                    // nombres, apellidos, totalVenta, tips, img
                    nombres: values.nombres,
                    apellidos: values.apellidos,
                    totalVenta: totalVenta,
                    numeroCliente: Entrepreneur.numeroCliente,
                    tips: [...Tips],
                    img: img
                }, Entrepreneur.numeroCliente)
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControlsEntrepreneur" id="form">
                <InputsGenerator Inputs={InputsAddEntrepreneurs} />
                <h2>Tip {TipActual}</h2>
                <InputsGenerator Inputs={InputsAddEntrepreneursTip} />
                <h2> Cambiar foto </h2>
                <InputAddProfile Img={img} Change={change} />
                <div className="B-Form EditForm">
                    <ButtonPurple className="EditBtn" type="submit">
                        Modificar
                    </ButtonPurple>
                    <ButtonPinkRed onClick={() => DeleteUser()} type="button" className="DeleteBtn">
                        Eliminar
                    </ButtonPinkRed>
                </div>
            </Form>
        </Formik>
    );
}
