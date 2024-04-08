import { Form, Formik } from "formik";
import { useEffect, useState } from 'react';
import './FormAddEntrepreneur.styl'
import { InputsGenerator } from "../../../../Components/Molecules/InputsGenerator";
import { InputsAddEntrepreneurs } from "../../../../Datos/Datos.InputsAddEntrepreneurs";
import { InputsAddEntrepreneursTip } from "../../../../Datos/Datos.InputsAddEntrepreneursTip";
import { InputAddProfile } from "../../../../Components/Molecules/InputAddProfile";
import { ButtonPurple } from "../../../../Components/Atoms/ButtonPurple";
import { ValidacionesAddEntrepreneurs } from "../../../../Datos/Datos.ValidacionesAddEntrepreneurs";
import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ValoresEditEntrepreneurs } from "../../../../Datos/Datos.ValoresEditEntrepreneurs";
import { CalcularUltimoTip } from "../../../../Datos/Datos.FunctionsEntrepeneur";
export function FormEditEntrepreneur({ Entrepreneur, TipActual, DeleteUser, Update, Tip }) {
    const [img, setImg] = useState(null)
    useEffect(() => {
        setImg(Entrepreneur.img)
    }, [Entrepreneur])
    const change = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result)
            console.log(1)
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
            validate={(v) => ValidacionesAddEntrepreneurs(v)}
            onSubmit={(values, { resetForm }) => {
                let newTip = {
                    tip: TipActual,
                    semana1: values.semana1 || 0,
                    semana2: values.semana2 || 0,
                    semana3: values.semana3 || 0
                }
                let totalVenta = 0;
                let Tips = []
                if (Entrepreneur.tips.length > 1) {
                    Tips = [...Entrepreneur.tips.filter((tip) => tip.tip !== TipActual)]
                    totalVenta = Tips.reduce((total, tip) => {
                        return total + tip.semana1 + tip.semana2 + tip.semana3;
                    }, 0)
                } else {
                    console.log(totalVenta);
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
                })
                resetForm();
                console.log('Formulario enviado');
            }}>
            <Form className="FormAdminControls" id="form">
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
