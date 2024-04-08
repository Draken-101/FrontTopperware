import Alert from '@mui/material/Alert';
import styled from 'styled-components';
const Error = styled.span`
    display: flex;
    width: 100%;
    color: red;
    font-size: 1.5vw;
    font-weight: 300;
    padding: ${props => props.Padding};
    justify-content: ${props => props.Content};
    border-bottom: ${props => props.Content ? '0.15vw solid rgba(136, 0, 139, 0.22)' : ""};
    margin-top: ${props => props.Aling ? "0px !important" : "1vw"};
    text-align: ${props => props.Aling ? props.Aling : "start"};
`;
export function MessageError ({message, aling, Content, Padding}){
    return (
         <Error Padding={Padding} Content={Content} Aling={aling}> { message } </Error>
    )
}