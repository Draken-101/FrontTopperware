import styled from 'styled-components';
import './CardProduct.styl'
import { Label } from '../../../../Components/Atoms/Label';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Container = styled.div`
    background-color: rgba(255, 247, 243, 1);
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    img{
        object-fit: cover;
        width: 5vw;
        height: 5vw;
    }
    label{
        padding: 0vw 1vw;
        border-right: 0.15vw solid;
    }
    .ClaveP{
        width: fit-content;
    }
    .CantidadP{
        width: fit-content;
    }
    .CantidadVentaP{
        width: fit-content;
    }
    button{
        margin-inline: 1vw;
        width: 2.8vw;
        height: 2.8vw;
        &:last-child{
            margin-left:0vw;
        }
    }
`;
export function CardProduct({ Product }) {

    return (
        <Container>
            <img src={'https://vir-to.s3.us-east-2.amazonaws.com/imgsEntrepreneurs/d23da2ed2'} alt="" />
            <Label>
                Nombre
            </Label>
            <Label className='ClaveP'>
                Clave
            </Label>
            <Label className='CantidadP'>
                1
            </Label>
            <Label className='CantidadVentaP'>
                $000.00
            </Label>
            <ButtonPurple>
                <EditIcon fontSize="large"/>
            </ButtonPurple>
            <ButtonPinkRed>
                <DeleteIcon fontSize="large"/>
            </ButtonPinkRed>
        </Container>
    )
}