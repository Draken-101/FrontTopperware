import styled from 'styled-components';
import { Label } from './Label';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
    position: relative;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    border: 0.1vw solid rgba(87, 0, 155, 0.61);
    filter: drop-shadow(0vw 0vw 0vw rgba(109, 41, 173, 0));
    transition: .3s ease-in-out; 
    padding: 0.5vw;
    overflow: hidden;
    img {
        width: 2.3vw;
        height: 2.3vw;
    }
    label {
        font-size: 1.5vw;
        justify-content: center;
        overflow: hidden;
        width: 0vw;
        opacity: 0;
        margin: 0vw;
        cursor: pointer;
    }
    &:hover{ 
        filter: drop-shadow(.2vw .2vw 0vw rgba(109, 41, 173, 0.285));
        transform: translate(-.2vw, -.2vw);
        label {
            width: ${props => props.Width};
            opacity: 1;
            margin: 0vw 1vw;
        }
    }
`;

export function ButtonIconHeader({ NameButton, IconButton, path, Width}) {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(path)} Width={Width}>
            <Label>{NameButton}</Label>
            <img src={IconButton} alt="Icon" />
        </Button>
    );
}
