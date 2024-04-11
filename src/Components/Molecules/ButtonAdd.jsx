import { ButtonIcon } from "../Atoms/ButtonIcon";

export function ButtonAdd({handleButtonClick, SeeFormAdd, clickedButton}){
    return(
        <ButtonIcon onClick={()=>{
            if(clickedButton !== "Add"){
                handleButtonClick('Add'); 
                SeeFormAdd()
            } else {
                handleButtonClick('');
            }
        }} clicked={clickedButton === 'Add' } Img={"/assets/Icons/icons8-más-96.png"}/>
    )
}