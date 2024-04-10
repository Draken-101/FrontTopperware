import { useRef, useState } from 'react';
import styled from 'styled-components';
import './InputSearchBar.styl';
import { type } from 'os';

const Input = styled.input`
    display: flex;
    align-items: center !important;
    width: 30vw;
    height: 2.99vw;
    color: rgba(186, 0, 123, 0.45);
    background-color: transparent;
    font-size: 2vw;
    &::placeholder {
        font-size: 2vw;
        font-weight: 400;
        color: rgba(186, 0, 123, 0.45);
    }
`;
const Div = styled.div`
    .active{
        transform: translate(0vw, -.5vw);
        border: 0.1vw solid rgb(186, 0, 124);
        filter: drop-shadow(0vw .5vw 0vw rgba(186, 0, 124, 0.446));
    }
`;

export function InputSearchBar({ Placeholder, Buscar }) {
    const [clickedButton, setClickedButton] = useState('');
    const [valor, setValor] = useState('');
    const inputRef = useRef(null);

    const Validar = (e) => {
        // const value = e.target.value;
    }

    const handleKeyDown = (event) => {
        
        if (event.key === 'Enter') {
            console.log(event.key)
          // Evita que se realice la acción por defecto de presionar Enter en un formulario
          event.preventDefault();
        } else {
            console.log("no enter")
        }
      };
    const onOff = (type) => {
        if(type !== clickedButton){
            setClickedButton(type);
            setValor(type)
        }else {
            setClickedButton("");
            setValor(null)
        }
    }

    return (
        <Div className='InputSearchBar'>
            <Input ref={inputRef} onKeyDown={handleKeyDown} placeholder={valor ?`Buscar por ${clickedButton}` : "Buscar por nombre"} onChange={(e) => Validar(e)} />
            <button
                className={clickedButton === 'Clave' ? 'ClaveSearchButton active' : 'ClaveSearchButton'}
                onClick={() => onOff('Clave')} />
            <button
                className={clickedButton === 'Top' ? 'TopSearchButton active' : 'TopSearchButton'}
                onClick={() => onOff('Top')} />
            <button
                className={clickedButton === 'Total Venta' ? 'VentaSearchButton active' : 'VentaSearchButton'}
                onClick={() => onOff('Total Venta')} />
        </Div>
    );
}
