import styled from 'styled-components';
const Container = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 29vw;
    background-image: url(${props => props.fondo});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        background-color: rgba(87, 0, 155, 0.61);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: .5vw;
        width: 27vw;
        height: fit-content;
        padding: 1vw;
        font-size: 1vw;
        color: rgba(255, 247, 243, 1);
        div{
            background-color: #71359e78;
            gap: 0vw;
            padding: 0vw;
            width: calc( (100% - 5vw ) / 3 );
            height: 3.2vw !important;
            text-align: center;
            span:nth-child(1){
                background-color: #0069ba82;
                width: 100%;
                padding: .2vw .5vw;
                margin-top: 0vw;
                font-size: 1vw;
            }
            span:nth-child(2){
                overflow-y: scroll;
                width: 100%;
                padding: .2vw .5vw;
                margin-top: 0vw;
                font-size: 1vw;
            }
        }
        div:nth-child(3){
            width: 6vw;
            span:nth-child(1){
                background-color: #00ba2882;
                width: 100%;
                padding: .2vw .5vw;
                margin-top: 0vw;
                font-size: 1vw;
            }
        }
        div:nth-child(4){
            width: 11.5vw;
        }
        span{
            text-overflow: ellipsis; 
            white-space: nowrap;
            width: fit-content;
            height: fit-content;
        }
        span:nth-child(1){
            padding: .5vw;
            background-color: #00baba82;
            width: 100%;
            font-size: 1.5vw;
        }
    }
`;

export function ProductFound({ Style }) {
    return (
        <Container fondo={Style.img} >
            <span className="Title"> {Style.nombreProducto} </span>
            <div>
                <span>{Style.nombre}</span>
                <div>
                    <span>Existencias</span>
                    <span>{Style.cantidad}</span>
                </div>
                <div>
                    <span>Precio</span>
                    <span>${Style.precio}</span>
                </div>
                <div>
                    <span>Clave</span>
                    <span>#{Style.clave}</span>
                </div>
            </div>
        </Container>
    )
}