import { Header } from "../Atoms/Header";
import styled from 'styled-components';
const Icon = styled.div`
    background-image: ${props => `url("${props.Icon}")`};
    width: 5%;
    height: 100%;
    background-color: white;
    background-size: 90%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-left: .15vw solid rgba(87, 0, 155, 0.61);
    border-right: .15vw solid rgba(87, 0, 155, 0.61);
`;
const H1 = styled.h1`
    color: rgba(87, 0, 155, 0.61);
    filter: drop-shadow(0vw 0.25vw 0.25vw black);
    width: 47.5%;
    font-size: 2vw;
    font-weight: 500;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export function HeaderAdmin({ Title, icon, Nav}){
    return(
        <Header>
            <H1> { Title } </H1>
            <Icon Icon={ icon }/> 
            { Nav }
        </Header>
    )
}