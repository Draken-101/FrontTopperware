
import { Link } from 'react-router-dom';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { Label } from '../../../../Components/Atoms/Label';
import { InputsGenerator } from '../../../../Components/Molecules/InputsGenerator';
import { Inputs } from '../../Datos/Datos.Inputs';
import { MessageError } from '../../../../Components/Atoms/MessageError';
export function FormContent({Error}) {
    return (
        <>
            <Label 
            Size={"3vw"} 
            Justify={"center"} 
            Weight={"700"}
            > Iniciar sesion</Label>
            <InputsGenerator Inputs={Inputs} />
            <MessageError message={Error} />
            <ButtonPurple Width={"100%"} type='submit'> Ingresar </ButtonPurple>
        </>
    )
}