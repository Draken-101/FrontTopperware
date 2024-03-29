import styled from 'styled-components';
import { Label } from '../../../../Components/Atoms/Label';
import { StyleButton } from '../../../../Components/Atoms/StyleButton';
import { useState } from 'react';
const Container = styled.div`
    width: calc(100% - 2vw);
    padding: 0.4vw 1vw;
`;
export function ProductStyles({ Data }) {
    const [id, setId] = useState(1)
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    return (
        <Container>
            <Label Size={"1.5vw"} Justify={"center"}> Elige tu estilo </Label>
            <div>{
                Data ?
                    Data.map((data) => {
                        <StyleButton
                            onClick={() => { setId(id+1); handleButtonClick(id)}}
                            clicked={clickedButton === id}> 
                        {data.name}
                        </StyleButton>
                    })
                    :
                    <>
                        {["Rosa", "Rojo", "Verde", "Cian", "Cafe"].map((buttonName) => (
                            <StyleButton
                                key={buttonName}
                                onClick={() => handleButtonClick(buttonName)}
                                clicked={clickedButton === buttonName} >
                                {buttonName}
                            </StyleButton>
                        ))}
                    </>
            }</div>
        </Container>
    )
}