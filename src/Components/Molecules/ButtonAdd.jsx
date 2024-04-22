import { ButtonIcon } from "../Atoms/ButtonIcon";

export function ButtonAdd({handleButtonClick, SeeFormAdd, clickedButton, openForm}){
    return(
        <ButtonIcon open={openForm} onClick={()=>{
            if(clickedButton !== "Add"){
                handleButtonClick('Add'); 
                SeeFormAdd()
            }
        }} clicked={clickedButton === 'Add' } Img={"/assets/Icons/icons8-más-96.png"}/>
    )
}