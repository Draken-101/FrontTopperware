import styled from 'styled-components';
const Input = styled.input`
    display: flex;
    align-items: center !important;
    width: 37vw;
    height: 3vw;
    border-bottom: 0.1vw solid rgba(186, 0, 123, 1);
    color: rgba(186, 0, 123, 0.45);
    font-size: 2vw;
    &::placeholder{
        font-size: 2vw;
        font-weight: 400;
        color: rgba(186, 0, 123, 0.45);
    }
`;
const Div = styled.div`
    display: flex;
    img{
        border-top-right-radius: .3vw;
        border-top-left-radius: .3vw;
        width: calc(2.5vw - .1vw);
        height: calc(2.5vw - 1px);
        padding: 0.25vw;
        border: 0.1vw solid rgba(186, 0, 123, 1);
    }
`;
export function InputSearchBar({ Placeholder }) {
    return (
        <Div>
            <Input placeholder={Placeholder ? Placeholder : "Buscar"} />
            <img src="src/assets/Icons/icons8-búsqueda-96.png" alt="" />
        </Div>
    )
}