import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { NavAdmin } from "./Components/Molecules/NavAdmin";
import { ContentProducts } from "./Components/Organims/ContentProducts";
import styled from 'styled-components';
import { ProductForm } from "./Components/Organims/ProductForm";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-items: flex-start;
`;
export function Vender(){
    return(
        <Container>
            <HeaderAdmin Title={'Vender'} icon={'public/assets/Icons/icons8-ventas-96.png'} Nav={<NavAdmin />}/>
            <ContentProducts />
            <ProductForm/>
        </Container>
    )
}