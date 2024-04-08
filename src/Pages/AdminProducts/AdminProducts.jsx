import { useState } from "react";
import './AdminProducts.styl'
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { CardsProducts } from "./Components/Organims/CardsProducts";
import { Products } from "../../Datos/Datos.Products";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { FormAddProducts } from "./Components/Organims/FormAddProducts";
import { ButtonAdd } from "../../Components/Molecules/ButtonAdd";
import { FormEditProduct } from "./Components/Organims/FormEditProduct";
export function AdminProducts() {
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [products, setProduts] = useState(Products);
    const [productStyles, setProductStyles] = useState(null);
    const [productEdit, setProductEdit] = useState(null);
    const Editar = (product) => {
        setProductEdit({
            product,
            claveProduct:product.clave
        });
    }
    const RemoveProduct = (productDelete) => {
        const newProducts = products.filter(p => p.clave !== productDelete.clave);
        setProduts(newProducts);
    }
    const SeeProductStyles = (p) => {
        setProductStyles(p);
        console.log(p);
    };
    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Productos"}
                icon={"src/assets/Icons/icons8-productos-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <div className="ContentAdmin">
                <CardsProducts SeeProductStyles={ SeeProductStyles } ProductStyles={productStyles ? false : true} Editar={Editar} Products={productStyles ? productStyles : products} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={productEdit ? "Editar Producto" : "Agregar Producto"}
                    Buttons={<ButtonAdd handleButtonClick={handleButtonClick} SeeForm={()=> setProductEdit(null)} clickedButton={clickedButton}/>}
                    Content={productEdit ? <FormEditProduct DeleteUser={() => {RemoveProduct(productEdit.product); setProductEdit(null)}} Product={productEdit.product} Tip={productEdit.claveProduct} /> : <FormAddProducts />} />
            </div>
        </>
    )
}