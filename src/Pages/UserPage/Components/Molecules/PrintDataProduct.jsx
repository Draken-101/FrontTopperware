import { Label } from '../../../../Components/Atoms/Label';
import { Paragraph } from '../Atoms/Paragraph';
import { Category } from '../Atoms/Category';
import { Type } from '../Atoms/Type';
import { StockPriceQuantity } from '../Atoms/StockPriceQuantity';
import { ProductStyles } from '../Atoms/ProductStyles';
import { ErrorMessage, useFormikContext } from 'formik';
import { MessageError } from '../../../../Components/Atoms/MessageError';
export function PrintDataProduct({ Data, styleData, handleButtonClick, clickedButton }) {
    const { errors } = useFormikContext();
    return (
        <div className='PrintDataProduct'>
            <Label Width={"fit-content"} Size={"3vw"} Margin={"0vw 1vw"}>
                {Data.nombre}
            </Label>
            <Paragraph>
                {styleData.descripcion}
            </Paragraph>
            <hr/>
            <Category CategoryData={styleData.categoria}/>
            <hr/>
            <Type TypeData={Data.tipo}/>
            <hr/>
            <StockPriceQuantity Data={styleData}/>
            <hr />
            <ErrorMessage className='ErrorMsj' name={'cantidad'} component={() => (<MessageError Padding={'.5vw 0vw'} Content={'center'} aling={'center'}  message={errors[ 'cantidad' ]} />)} />
            <ProductStyles Data={Data.estilos} handleButtonClick={handleButtonClick} clickedButton={styleData.clave}/>
        </div>
    )
}