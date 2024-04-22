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
    display: grid;
    grid-template-columns: 5vw 30% 30% 5% 13.5% 7% 7%;
    align-items: center;
    justify-items: center;
    img{
        object-fit: cover;
        width: 5vw;
        height: 5vw;
    }
    label{
        align-items: center;
        width: calc(100% - 2vw);
        height: 2.8vw;
        font-size: 1.3vw;
        padding: 0vw 1vw;
        border-right: 0.15vw solid rgba(136, 0, 139, 0.21);
    }
    .center{
        justify-content: center;
    }
    .CardProductbutton{
        width: 2.8vw;
        height: 2.8vw;
        margin: 0%;
    }
`;
export function CardProduct({ Product, Edit, Delete }) {

    return (
        <Container>
            <img src={Product.img} alt="" />
            <Label >
                {Product.nombre}
            </Label>
            <Label>
                {Product.clave}
            </Label>
            <Label className='center'>
                {Product.cantidad}
            </Label>
            <Label className='center'>
                ${Product.precio * Product.cantidad}
            </Label>
            <ButtonPurple className='CardProductbutton' onClick={() => Edit(Product)}>
                <EditIcon fontSize="large"/>
            </ButtonPurple>
            <ButtonPinkRed className='CardProductbutton' onClick={() => Delete(Product.clave)}>
                <DeleteIcon fontSize="large"/>
            </ButtonPinkRed>
        </Container>
    )
}