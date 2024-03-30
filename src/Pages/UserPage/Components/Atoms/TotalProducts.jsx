import styled from 'styled-components';
import './TotalProducts.styl'
const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
export function TotalProducts({Total}){
    return(
        <Container>
            <div className='Line'/>
            <div className='Total'>
                <span className='Texto1'> Total </span>
                <span className='Texto2'> ${Total}  </span>
            </div>
        </Container>
    )
}