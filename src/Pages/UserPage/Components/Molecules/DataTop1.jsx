import './DataTop1.styl'
import { ProfileImg } from '../../../../Components/Atoms/ProfileImg';
import { Label } from '../../../../Components/Atoms/Label';
export function DataTop1({ Entrepreneur }) {
    return (
        <div className='DataTop1'>
            <ProfileImg Width={"6vw"} src={Entrepreneur?.img} />
            <div>
                <Label className='LabelNombre' Size={"1.3vw"}> 
                Hola&nbsp; { Entrepreneur?.nombres } &nbsp;Bienvenida!!!
                </Label>
                <Label className='LabelTotalVenta' Size={"1.3vw"}> 
                { `$${Entrepreneur?.totalVenta}` }
                </Label>
            </div>
        </div>
    )
}