import styled from 'styled-components';
import './FondoCarga.css'
const Fondo = styled.div`
    background-color: #000000b5;
    display: grid;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: ${props => props.cargaActive ? 100 : 0};
    opacity: ${props => props.cargaActive ? 1 : 0};
`;
export function FondoCarga({ carga }) {
    return (
        <Fondo cargaActive={carga}>
            <div id="preloader_1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Fondo>
    )
}