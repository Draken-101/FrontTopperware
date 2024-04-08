import { ButtonIcon } from "../Atoms/ButtonIcon";

export function ButtonAdd({handleButtonClick, SeeForm, clickedButton}){
    return(
        <ButtonIcon onClick={()=>{handleButtonClick(0); SeeForm()}} clicked={clickedButton == 0 } Img={"src/assets/Icons/icons8-más-96.png"}/>
    )
}