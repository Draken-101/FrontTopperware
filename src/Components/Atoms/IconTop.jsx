import styled from 'styled-components';
const Icon = styled.img`
    width: ${props => props.Width || "5vw"};
    height: ${props => props.Height || "5vw"};
    object-fit: cover;
`;
export function IconTop({Src}){
    return(
        <Icon src={Src} />
    )
}