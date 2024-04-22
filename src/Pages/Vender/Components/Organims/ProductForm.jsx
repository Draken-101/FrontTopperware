import styled from 'styled-components';
import { ProductFound } from '../Molecules/ProductFound';
import { FormAdd } from '../Molecules/FormAdd';
import { Formik } from 'formik';
import { Validaciones } from '../../Datos/Datos.Validaciones';
import { Label } from '../../../../Components/Atoms/Label';
const Containder = styled.div`
    width: 29vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 18vw);
    margin-top: 1vw;
    background-color: rgba(255, 247, 243, 1);
    span{
        opacity: 1;
    }
    .ProductForm{
        display: flex;
        flex-direction: column;
        gap: 2vw;
        width: 90%;
    }
`;

export function ProductForm({ Style, Add }) {
    return (
        <Containder>
            {
                Style.clave !== undefined ?
                    <>
                        <ProductFound Style={Style} />
                        <Formik
                            initialValues={{ cantidad: '' }}
                            validate={(v) => Validaciones(v, Style.cantidad)}
                            onSubmit={async (values, { resetForm }) => {
                                let newStyle = { ...Style };
                                newStyle.cantidad = values.cantidad;
                                Add(newStyle)
                                resetForm();
                                console.log('Formulario enviado');
                            }}>
                            <FormAdd />
                        </Formik>
                    </>
                    :

                    <span className="Title"> No hay coincidencidencias. </span>
            }
        </Containder>
    )
}