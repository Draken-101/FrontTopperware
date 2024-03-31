import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { LoginLogo } from "../../../../Components/Molecules/LoginLogo";
import { IconTraking } from "../Atoms/WhatsappIcon";
import './PurchaseTracking.styl'
export function PurchaseTracking({Volver}) {
    return (
        <div className='ConfirmOrder'>
            <LoginLogo Width={"35%"} />
            <div className='Traking'>
                <div className="TopHeaderTraking">
                    <h1>Seguimiento de compra</h1><hr />
                    <div className="NumPedido">
                        <span> Numero de pedido:  </span>
                        <span> 1 </span>
                    </div><hr />
                </div>
                <h2> Paso 1 </h2>
                <span> Pongase en contanco al siguiente numero: </span>
                <span className="IconMargin">
                    <IconTraking src="src/assets/Icons/icons8-whatsapp-96.png" /> +52 961 321 4782
                </span>
                <span> Esto con el fin de aclarar dudas, finalizar la compra y obtener la guia de seguimiento. </span>
                <h2> Paso 2 </h2>
                <span> Hacer el deposito y/o transferencia al siguiente numero de cuenta: </span>
                <span className="IconMargin">
                    <IconTraking src="src/assets/Icons/icons8-banco-96.png" /> 849203571632
                </span>
                <h2> Paso 3 </h2>
                <span> Enviar el ticket, captura de transferencia o fotografia del ticket de el deposito al numero antes dado, Esto con el fin de quedar evidencia de que se hizo el pago. </span>
                <h2> Paso 4 </h2>
                <span className="IconMargin">
                    <IconTraking Width={"5vw"} src="src/assets/Icons/icons8-casilla-de-verificación-marcada-100.png" />
                    Disfrute  su compra!!!
                </span><hr />
                <ButtonPinkRed onClick={Volver}> Volver </ButtonPinkRed>
            </div>
        </div>
    )
}