import { Label } from '../../../../Components/Atoms/Label';
import { Paragraph } from '../../../UserPage/Components/Atoms/Paragraph';
import { Category } from '../../../UserPage/Components/Atoms/Category';
import { Type } from '../../../UserPage/Components/Atoms/Type';
import { StockPriceQuantity } from '../../../UserPage/Components/Atoms/StockPriceQuantity';
import { ProductStyles } from '../../../UserPage/Components/Atoms/ProductStyles';
import { ErrorMessage, useFormikContext } from 'formik';
import { MessageError } from '../../../../Components/Atoms/MessageError';
import { useState } from 'react';
export function PrintDataProduct({ Product, styleData, Styles, handleButtonClick }) {
    const { errors } = useFormikContext();
    return (
        <div className='PrintDataProduct'>
            <Label Width={"fit-content"} Size={"3vw"} Margin={"1vw 1vw"}>
                {Product.nombre}
            </Label>
            <Paragraph>
                {styleData.descripcion}
            </Paragraph>
            <hr/>
            <Category CategoryData={styleData.categoria}/>
            <hr/>
            <Type TypeData={Product.tipo}/>
            <hr/>
            <StockPriceQuantity Data={styleData}/>
            <hr />
            <ErrorMessage className='ErrorMsj' name={'cantidad'} component={() => (<MessageError Padding={'.5vw 0vw'} Content={'center'} aling={'center'}  message={errors[ 'cantidad' ]} />)} />
            <ProductStyles Data={Styles} handleButtonClick={handleButtonClick} clickedButton={styleData.clave}/>
        </div>
    )
}