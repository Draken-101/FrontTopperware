import styled from 'styled-components';
import { Img } from '../../../../Components/Atoms/Img';
import { PrintDataProduct } from '../Molecules/PrintDataProduct';
import { Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores';
import { ValidacionesAddCar } from '../../Datos/Datos.ValidacionesAddCar';
import { Buttons } from '../Molecules/Buttons';
import {  useState } from 'react';
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
export function ProductInfo({ Product, Styles, Volver, AgregarCarrito }) {
    const [styleData, setStyleData] = useState(Product.estilos[0]);
    const handleButtonClick = (style) => {
        setStyleData(style);
    };
    return (
        <Container>
            <Img src={styleData.img} Width={"90%"} Height={"90%"} />
            <Formik
                className="Form"
                initialValues={Valores}
                validate={(v) => ValidacionesAddCar(v, styleData.cantidad)}
                onSubmit={(values, { resetForm }) => {
                    let p = { ...styleData, cantidad:values.cantidad};
                    console.log(p);
                    AgregarCarrito(p, Product.nombre)
                    console.log('Formulario enviado');
                    Volver()
                    resetForm();
                }}>
                <Form className="Form">
                    <PrintDataProduct styleData={styleData} Data={Product} handleButtonClick={handleButtonClick}/>
                    <Buttons Volver={Volver}/>
                </Form>
            </Formik>
        </Container>
    )
}