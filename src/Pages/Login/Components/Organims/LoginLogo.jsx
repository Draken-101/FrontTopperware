import styled from 'styled-components';
const Logo = styled.div`
    width: 50%;
    height: 100%;
    background-color: rgba(231, 185, 188, 1);
    background-image: url("src/assets/Img/Logo.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 75%;
`;
export function LoginLogo(){
    return(
        <Logo/>
    )
}