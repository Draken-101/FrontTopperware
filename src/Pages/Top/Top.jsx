import { IconTop } from '../../Components/Atoms/IconTop';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { top } from '../UserPage/Functions';
import { ContentTop } from './Components/Organims/ContentTop';
export function Top(){
    return(
        <>
            <HeaderUser Icon={<IconTop Src={"src/assets/Icons/icons8-tienda-96.png"} />} Data={top} OnClick={""} />
            <ContentTop/>
        </>
    )
}