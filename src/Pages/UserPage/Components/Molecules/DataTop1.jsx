import styled from 'styled-components';
import { ProfileImg } from '../../../../Components/Atoms/ProfileImg';
import { Label } from '../../../../Components/Atoms/Label';
const Container = styled.div`
    display: flex;
    align-items: center;
    width: calc( 100% / 3 );
    height: 100%;
    div{
        height: 100%;
        border-left: 0.2vw solid rgba(87, 0, 155, 0.61);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .2vw;
        padding: 0vw 1vw;
    }
`;
export function DataTop1({ Entrepreneur }) {
    return (
        <Container>
            <ProfileImg Width={"6vw"} src={ Entrepreneur ? Entrepreneur.img : 'src/assets/Img/Minnie-perfil.png'} />
            <div>
                <Label
                    Size={"1.3vw"}> 
                { Entrepreneur ? Entrepreneur.nombre : "Nombre" }
                </Label>
                <Label
                    Size={"1.1vw"}> 
                { Entrepreneur ? Entrepreneur.top : "Top #1" }
                </Label>
                <Label
                    Size={"1.3vw"}> 
                { Entrepreneur ? `$${Entrepreneur.totalVenta}` : "$000.00" }
                </Label>
            </div>
        </Container>
    )
}