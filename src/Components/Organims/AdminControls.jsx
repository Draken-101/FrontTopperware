import styled from 'styled-components';
import './AdminControls.styl'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;
export function AdminControls({title, Buttons, Content, openForm}){
    return(
        <Container>
            <div className='Buttons'>
                { Buttons }
            </div>
            <span className={`Title ${openForm ? 'visible' : ''}`}> { title } </span>
            { Content }
        </Container>
    )
}