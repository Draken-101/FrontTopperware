
import styled from 'styled-components';
import './InputAddProfile.styl'
const Input = styled.input`
    display: none;
`;
const Image = styled.div`
    width: ${props => props.Img ? "100%" : "8vw"};
    height: ${props => props.Img ? "20vw" : "8vw"};
    border-radius: ${props => props.Img ? ".5vw" : "50%"};
    background-image: ${props => props.Img ? `url(${props.Img})` : `url('src/assets/Icons/icons8-más-96.png')`};
    background-size: ${props => props.Img ? 'cover' : '80% 80%'};
`;
export function InputAddProfile({ Img, Change }) {
    return (
        <>
            <Input type='file' id='img' name='img' onChange={Change} accept="image/*"/>
            <button onClick={()=> document.getElementById('img').click()} type='button' className={`BtnInputAddProfile ${Img ? "ChangeStyleButton" : ""}`}>
                <Image Img={Img} />
                <p/>
                { Img ? <span> Cambiar </span> : ""}
            </button>
        </>
    )
}