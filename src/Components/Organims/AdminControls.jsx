import styled from 'styled-components';
import './AdminControls.styl'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
export function AdminControls({title, Buttons, Content}){
    return(
        <Container>
            <div className='Buttons'>
                { Buttons }
            </div>
            <span className='Title'> { title } </span>
            { Content }
        </Container>
    )
}