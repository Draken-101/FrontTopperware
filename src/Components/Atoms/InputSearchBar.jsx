import { useState } from 'react';
import styled from 'styled-components';
const Input = styled.input`
    display: flex;
    align-items: center !important;
    width: 30vw;
    height: 3vw;
    border-bottom: 0.1vw solid rgba(186, 0, 123, 1);
    color: rgba(186, 0, 123, 0.45);
    font-size: 2vw;
    &::placeholder{
        font-size: 2vw;
        font-weight: 400;
        color: rgba(186, 0, 123, 0.45);
    }
`;
export function InputSearchBar({ Placeholder, Buscar }) {
    const [valor, setValor] = useState('')
    const Validar = (e) => {
        if(/^#/.test(e.target.value)){
            console.log("----------");
            console.log("clave");
            // Buscar()
        } else if(/^\$/.test(e.target.value)) {
            console.log("----------");
            console.log("totalVenta");
        } else if(/^\*/.test(e.target.value)){
            console.log("----------");
            console.log("top");
        }

    }
    return (
        <Input placeholder={Placeholder ? Placeholder : "Buscar"} onChange={(e) => Validar(e)} />
    )
}