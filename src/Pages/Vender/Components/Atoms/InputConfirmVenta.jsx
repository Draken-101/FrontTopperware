import styled from 'styled-components';
import { Label } from '../../../../Components/Atoms/Label';
import { MessageError } from '../../../../Components/Atoms/MessageError';
import { ValidacionVenta } from '../../Datos/Datos.ValidacionVenta';
import { useState } from 'react';
const Div = styled.div`
    label{
        width: 45% !important;
        font-size: 1.5vw !important;
        border-bottom: 0 !important;
    }
    input{
        width: 45%;
        font-size: 1.5vw !important;
        &::placeholder{
            font-size: 1.5vw !important;
        }
    }
`;

export function InputConfirmVenta({ cambio, ventaTotal }) {
    const [errors, setErrors] = useState();
    return (
        <Div key={'cantidad'} >
            <Label htmlFor={'cantidad'} > {'Cantidad de pago'} </Label>
            <input onChange={(e) => {
                let validation = ValidacionVenta(e.target.value, ventaTotal);
                if (!validation.error) {
                    setErrors('');
                    cambio(e.target.value)
                } else {
                    setErrors(validation.message);
                }
            }} className='Field' placeholder={'Ej. 0'} id={'cantidad'} name={'cantidad'} type={'number'} />
            <MessageError className='errs' message={errors} />
        </Div>
    )
}