
import styled from 'styled-components';
import { Label } from '../Atoms/Label';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { MessageError } from '../Atoms/MessageError';
import './InputsGenerator.css'
const Div = styled.div`
    width: 100%;
    gap: 0vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;
export function InputsGenerator({  RegisterInputs }) {
    const { errors } = useFormikContext();
    return (
        <>
            {
                RegisterInputs.fields.map((date, index) => {
                    return (
                        <Div key={index}>
                            <Label htmlFor={ date.valor } > { date.label } </Label>
                            <Field className='Field' placeholder={ date.placeholder } id={ date.valor } name={ date.valor } type={ date.type }/>
                            <ErrorMessage name={ date.valor } component={() => (<MessageError message={errors[ date.valor ]} />)} />
                        </Div>
                    )
                })
            }
        </>
    )
}