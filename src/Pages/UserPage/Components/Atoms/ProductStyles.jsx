import styled from 'styled-components';
import { Label } from '../../../../Components/Atoms/Label';
import { StyleButton } from '../../../../Components/Atoms/StyleButton';
import { useState } from 'react';
const Container = styled.div`
    width: calc(100% - 2vw);
    padding: 0.4vw 1vw;
`;
export function ProductStyles({ Data, handleButtonClick, clickedButton }) {
    return (
        <Container>
            <Label Size={"1.5vw"} Justify={"center"}> Elige tu estilo </Label>
            <div>
                {
                    Data.map((data, index) => 
                        <StyleButton
                            type='button'
                            onClick={() => handleButtonClick(data)}
                            clicked={clickedButton === data.clave}>
                            {data.nombre}
                        </StyleButton>
                    )
                }
            </div>
        </Container>
    )
}