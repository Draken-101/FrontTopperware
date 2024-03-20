import styled from 'styled-components';
import { Label } from './Label';
const Button = styled.button`
    position: relative;
    padding: .2vw;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: white;
    border: .15vw solid rgba(87, 0, 155, 0.61);
    transition: .3s;
    img {
        width: 2.3vw;
        height: 2.3vw;
    }
    label {
        font-size: 1.5vw;
        justify-content: center;
        overflow: hidden;
        width: 0vw;
        transition:  .7s; 
        margin: 0vw;
        cursor: pointer;
        opacity: 0; 
    }
    &:hover label {
        width: calc( ( 100vw / 10 ) - .5vw );
        margin: 0vw 1vw; 
        opacity: 1;
    }
`;
export function ButtonIconHeader({ Data, OnClick }) {
    return (
        <Button onClick={OnClick}>
            <Label> {Data.name ? Data.name : "Name none &"} </Label>
            <img src={Data.icon ? Data.icon : ""} />
        </Button>
    )
}