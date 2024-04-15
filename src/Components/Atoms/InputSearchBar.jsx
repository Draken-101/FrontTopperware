import { useRef, useState } from 'react';
import styled from 'styled-components';
import './InputSearchBar.styl';

const Input = styled.input`
    display: flex;
    align-items: center !important;
    width: 30vw;
    height: 2.99vw;
    color: rgba(186, 0, 123, 0.45);
    background-color: transparent;
    font-size: 2vw;
    &::placeholder {
        font-size: 1.8vw;
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
const Button = styled.button`
    background-image: url(${props => props.Img});
    background-size: 70% 70%; 
    background-repeat: no-repeat;
    background-position: center;
`;

export function InputSearchBar({ Buscar, Btns }) {
    const [clickedButton, setClickedButton] = useState('');
    const inputRef = useRef(null);
    const onOff = (type) => {
        if (type !== clickedButton) {
            setClickedButton(type);
        } else {
            setClickedButton("");
        }
    }
    
    return (
        <Div className='InputSearchBar'>
            <Input ref={inputRef} placeholder={clickedButton ? `Buscar por ${clickedButton}` : "Buscar por nombre"} onChange={(e) => Buscar(e.target.value, clickedButton)} />
            {
                Btns.map((Btn) => 
                    <Button
                        className={clickedButton === Btn.type ? 'active' : ''}
                        Img = {Btn.icon}
                        onClick={() => onOff(Btn.type)} />
                )
            }
        </Div>
    );
}
