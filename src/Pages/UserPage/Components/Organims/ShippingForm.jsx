import styled from 'styled-components';
import { LoginLogo } from '../../../../Components/Molecules/LoginLogo';
import { OrderForm } from '../Molecules/OrderForm';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
export function ShippingForm({Cancelar, SaveData}){
    return(
        <Container>
            <OrderForm Cancelar={Cancelar} SaveData={SaveData}/>
            <LoginLogo Width={"50%"}/>
        </Container>
    )
}