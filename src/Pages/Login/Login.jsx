import styled from 'styled-components';
import { FormLogin } from "./Components/Organims/FormLogin";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
export function Login(){
    return(
        <Container>
            <FormLogin/>
        </Container>
    )
}