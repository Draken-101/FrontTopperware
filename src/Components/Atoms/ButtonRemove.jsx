import styled from 'styled-components';
const Button = styled.button`
    border-radius: .15vw ;
    width: 2.5vw;
    height: 2.5vw;
    background-color: rgba(186, 0, 123, 1);
    img{
        width: 70%;
        filter: brightness(1000%) contrast(100%);
    }
`;
export function ButtonRemove({Borrar}){
    return(
        <Button className='Product' onClick={Borrar}>
            <img src="src/assets/Icons/borrar.png" alt="" />
        </Button>
    )
}