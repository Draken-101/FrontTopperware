import Alert from '@mui/material/Alert';
import styled from 'styled-components';
const Error = styled.span`
    display: flex;
    width: 100%;
    color: red;
    font-size: 1.5vw;
    font-weight: 300;
    margin-top: ${props => props.Aling ? "0px" : "1vw"};
    text-align: ${props => props.Aling ? props.Aling : "start"};
`;
export function MessageError ({message, aling}){
    return (
         <Error Aling={aling}> { message } </Error>
    )
}