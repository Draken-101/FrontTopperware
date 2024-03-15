import { Button } from '../../../../Components/Atoms/Button';
import { Label } from '../../../../Components/Atoms/Label';
import { InputsGenerator } from '../../../../Components/Molecules/InputsGenerator';
import { Inputs } from '../../Datos/Datos.Inputs';
export function FormContent() {
    return (
        <>
            <Label 
            Size={"3vw"} 
            Justify={"center"} 
            Weight={"700"}
            > Iniciar sesion</Label>
            <InputsGenerator RegisterInputs={Inputs} />
            <Button Width={"100%"}> Ingresar </Button>
        </>
    )
}