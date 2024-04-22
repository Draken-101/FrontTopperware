import styled from 'styled-components';
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { Btns } from '../../Datos/Datos.Valores';
import { CardProduct } from '../Molecules/CardProduct';
const Container = styled.div`
    width: 68vw;
    height: calc(100vh - 18vw);
    padding: 0vw 1vw 1vw 1vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    .ProductsList{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 1vw;
        height: fit-content;
        max-height: calc(100% - 4vw);
    }
`;
export function ContentProducts({Buscar, Styles, Edit, Delete}){
    return(
        <Container>
            <SearchBar Buscar={Buscar} SearchButtons={Btns} Vender={true}/>
            <div className='ProductsList'>
                {
                    Styles?.map((product) => <CardProduct Product={product} Edit={Edit} Delete={Delete}/>)
                }
                
            </div>
        </Container>
    )
}