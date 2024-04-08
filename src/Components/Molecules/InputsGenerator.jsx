
import styled from 'styled-components';
import { Label } from '../Atoms/Label';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { MessageError } from '../Atoms/MessageError';
import './InputsGenerator.css'
const Div = styled.div`
    width: ${props => props.Width};
    margin-top: 1vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;
export function InputsGenerator({  Inputs, Data }) {
    const { errors } = useFormikContext();
    return (
        <>
            {
                Inputs.fields.map((date, index) => {
                    return (
                        <Div key={index} Width={date.width ? date.width : "100%"}>
                            <Label htmlFor={ date.valor } > { date.label } </Label>
                            { date.type !== "textarea" ?
                            <Field className='Field'  placeholder={ date.placeholder } id={ date.valor } name={ date.valor } type={ date.type }/>
                            : 
                            <Field className='Field' placeholder={ date.placeholder } id={ date.valor } name={ date.valor } as={ date.type }/> 
                            }
                            <ErrorMessage name={ date.valor } component={() => (<MessageError message={errors[ date.valor ]} />)} />
                        </Div>
                    )
                })
            }
        </>
    )
}