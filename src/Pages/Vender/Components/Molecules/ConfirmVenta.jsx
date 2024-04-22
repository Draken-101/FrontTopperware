import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { Label } from '../../../../Components/Atoms/Label';
import { InputConfirmVenta } from '../Atoms/InputConfirmVenta';
import { Form, Formik } from 'formik';
import './ConfirmVenta.styl'
import { useState } from 'react';
import createPdf from '../../Datos/createPdf';
export function ConfirmVenta({ close, ventaTotal }) {
    const [vT, setVT] = useState(ventaTotal());
    const [cambio, setCambio] = useState(0);
    const [base64, setBase64] = useState('');
    const [message, setMessage] = useState('');
  
    const onGenerateTicket = async (output) => {
      setBase64('');
      setMessage('');
  
      const response = await createPdf(output);
  
      if (!response?.success) {
        alert(response?.message);
        return;
      }
  
      if (output === 'b64') {
        setBase64(response?.content ?? '');
      }
  
      setMessage(response?.message);
  
      setTimeout(() => {
        setMessage('');
      }, 2000);
    };
    
    return (
        <Formik
            onSubmit={({ resetForm }) => {
                onGenerateTicket('b64')
                resetForm()
                console.log('Formulario enviado');
            }}>
            <Form className='ConfirmVenta'>
                <Label>Pagar</Label>
                <div>
                    <span>Total a pagar</span>
                    <span>${vT}</span>
                </div>
                <InputConfirmVenta cambio={(value) => setCambio(value - vT)} />
                <div>
                    <span>Cambio</span>
                    <span>${cambio}</span>
                </div>
                <ButtonPurple type='submit'>
                    Vender
                </ButtonPurple>
                <ButtonPinkRed onClick={() => close(false)} type='button'>
                    Cancelar
                </ButtonPinkRed>
            </Form>
        </Formik>
    )
}