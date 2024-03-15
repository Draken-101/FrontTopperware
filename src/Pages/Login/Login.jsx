import styled from 'styled-components';
import { FormLogin } from "./Components/Organims/FormLogin";
import { LoginLogo } from "./Components/Organims/LoginLogo";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
export function Login(){
    return(
        <Container>
            <FormLogin/>
            <LoginLogo/>
        </Container>
    )
}