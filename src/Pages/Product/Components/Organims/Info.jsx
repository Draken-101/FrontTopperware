import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Img } from '../../../../Components/Atoms/Img';
import { PrintDataProduct } from '../Molecules/PrintDataProduct';
import { Buttons } from '../Molecules/Buttons';
import { ValidacionesAddCar } from '../../Datos/Datos.ValidacionesAddCar';
import { useNavigate } from 'react-router-dom';
import { ValoresForm } from '../../Datos/Datos.Valores';
const Container = styled.div`
    display: grid;
    grid-template-columns: 40vw 58vw;
    grid-template-rows: 100%;
    width: calc(100% - 2vw);
    height: calc( 100vh - 8.6vw);
    align-items: center;
    justify-items: center;
    margin: 1vw;
    background-color: rgba(255, 247, 243, 1);
    img{
        border-right: .15vw solid rgba(136, 0, 139, 0.22);
        padding: 1vw 3.5%;
    }
    .Form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
`;
export function Info({ AgregarCarrito, Styles, Product }) {
    const [style, setStyle] = useState(...Styles.filter((style, index) => index === 0));
    const navigate = useNavigate();
    const handleButtonClick = (style) => {
        setStyle(style);
    };
    return (
        <Container>
            <Img src={style.img} Width={"90%"} Height={"90%"} />
            <Formik
                className="Form"
                initialValues={ValoresForm()}
                validate={(v) => ValidacionesAddCar(v, style.cantidad)}
                onSubmit={(values, { resetForm }) => {
                    AgregarCarrito()
                    navigate('/UserShop')
                    Volver()
                    resetForm();
                }}>
                <Form className="Form">
                    <PrintDataProduct handleButtonClick={handleButtonClick} Product={Product} styleData={style} Styles={Styles} />
                    <Buttons />
                </Form>
            </Formik>
        </Container>
    )
}