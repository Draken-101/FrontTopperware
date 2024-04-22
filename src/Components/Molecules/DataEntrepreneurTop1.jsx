import './DataEntrepreneurTop1.styl'
import { ProfileImg } from '../Atoms/ProfileImg';
import { Label } from '../Atoms/Label';
export function DataEntrepreneurTop1({ Entrepreneur }) {
    return (
        <div className='DataTop1'>
            <ProfileImg Wth={"6vw"} src={Entrepreneur?.img } />
            <div>
                <Label className='LabelNombre' Size={"1.3vw"}> 
                { `${Entrepreneur?.nombres} ${Entrepreneur?.apellidos}` }
                </Label>
                <Label className='LabelTop' Size={"1vw"}> 
                { `Top: ${Entrepreneur?.top}` }
                </Label>
                <Label className='LabelTotalVenta' Size={"1vw"}> 
                { `Venta total: $${Entrepreneur?.totalVenta}` }
                </Label>
            </div>
        </div>
    )
}