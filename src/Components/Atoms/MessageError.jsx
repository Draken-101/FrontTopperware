import Alert from '@mui/material/Alert';
import styled from 'styled-components';
const Error = styled.span`
    display: flex;
    width: 100%;
    color: red;
    font-size: 1.5vw;
    font-weight: 300;
    margin-top: 1vw;
`;
export function MessageError ({message}){
    return (
         <Error> { message } </Error>
    )
}