import { useState } from "react";
import './AdminProducts.styl'
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { Products } from "../../Datos/Datos.Products";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { FormAddProduct } from "./Components/Organims/FormAddProduct";
import { ButtonAdd } from "../../Components/Molecules/ButtonAdd";
import { FormEditProduct } from "./Components/Organims/FormEditProduct";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { ProductStyle, ProductsStyles } from "../../Datos/Datos.ProductsStyles";
import { CardsProducts } from "./Components/Organims/CardsProducts";
import { ButtonsFormEdit } from "./Components/Molecules/ButtonsFormEdit";
import { FormEditProductStyle } from "./Components/Organims/FormEditProductStyle";
import { FormAddProductStyle } from "./Components/Organims/FormAddProductStyle";
export function AdminProducts() {
    const [clickedButton, setClickedButton] = useState('Add');
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [products, setProducts] = useState([...Products()]);
    const [productsBuscar, setProductsBuscar] = useState([...products]);
    const [productsStyles, setProductsStyles] = useState([...ProductsStyles()]);
    const [typeCards, setTypeCards] = useState('Normal');
    const [claveActual, setClaveActual] = useState('');
    const [productEdit, setProductEdit] = useState(null);
    const Editar = (product) => {
        setProductEdit({
            product,
            claveProduct: product.clave
        });
    }
    const Btns = [
        {
            type: "clave",
            icon: "src/assets/Icons/IconHash.svg"
        },
    ]
    const BuscarStyle = (value, type) => {

        if (value === "") {
            setProducts([...productsStyles.filter((e) => e.getClave() === claveActual)]);
            return;
        }
        let Styles = [];
        switch (type) {
            case "clave":
                Styles = [...productsStyles.filter((e) => {
                    let Clave = e.clave.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return Clave.toLowerCase().includes(value.toLowerCase());
                })];
                break;
            default:
                Styles = [...productsStyles.filter((e) => {
                    let Nombre = e.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return Nombre.toLowerCase().includes(value.toLowerCase());
                })];
                break;
        }
        setProducts([...Styles.filter((e) => e.getClave() === claveActual)]);
    }
    const BuscarProducto = (value, type) => {

        if (value === "") {
            setProducts([...productsBuscar]);
            return;
        }
        let Products = [];
        switch (type) {
            case "clave":
                Products = [...productsBuscar.filter(({ clave }) => clave === value)];
                break;
            default:
                Products = [...productsBuscar.filter((e) => {
                    let Nombre = e.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return Nombre.toLowerCase().includes(value.toLowerCase());
                })];
                break;
        }
        setProducts([...Products]);
    }
    const RemoveProduct = (productDelete) => {
        const newProducts = [...productsBuscar.filter(p => p.clave !== productDelete.clave)];
        setProductsBuscar([...newProducts])
        setProducts([...newProducts]);
    }
    const RemoveStyle = (styleDelete) => {
        let newStyles = [...productsStyles.filter(p => p.clave !== styleDelete.clave)];
        let newCount = newStyles.reduce((total, productStyle) => {
            if (productStyle.getClave() === styleDelete.getClave()) {
                return total + productStyle.getCantidad();
            }
            return total;
        }, 0);
        let newProducts = [...productsBuscar.filter((e) => {
            if (e.getClave() === styleDelete.getClave()) {
                e.updateCantidad(newCount);
            }
            return e;
        })]
        setProductsStyles([...newStyles]);
        console.log(productsStyles);
        setProducts([...newStyles.filter((s) => s.getClave() === styleDelete.getClave())]);
        setProductsBuscar([...newProducts]);
    }
    const SeeProductStyles = (clave) => {
        setClaveActual(clave);
        let newProductsStyles = [...productsStyles.filter((productStyle) => productStyle.getClave() === clave)];
        setProducts([...newProductsStyles])
        setTypeCards('Styles')
        setProductEdit(null)
    };
    const updateProduct = (newProduct, actualClave) => {
        let newProducts = [...productsBuscar.filter((e) => {
            if (e.getClave() === actualClave) {
                e.updateProduct(
                    // clave, nombre, tipo 
                    newProduct.clave,
                    newProduct.nombre,
                    newProduct.tipo
                )
            }
            return e;
        })]
        let newStyles = [...productsStyles.filter((styles) => {
            if (styles.getClave() === actualClave) {
                styles.updateClave(newProduct.clave);
            }
            return styles;
        })]
        setProductsStyles([...newStyles])
        setProducts([...newProducts]);
        setProductEdit(null)
        setClickedButton('Add')
    }
    const updateProductStyle = (newStyle, actualClave) => {
        let newProductsStyles = [...productsStyles.filter((s) => {
            if (s.getClaveCompleta() === newStyle.clave) {
                console.log(s);
                s.updateProductStyle(
                    newStyle.nombre,
                    newStyle.cantidad,
                    newStyle.precio,
                    newStyle.categoria,
                    newStyle.descripcion,
                    newStyle.img
                );
                console.log(s);
            }
            return s;
        })]
        let newCount = productsStyles.reduce((total, productStyle) => {
            if (productStyle.getClave() === newStyle.getClave()) {
                return total + productStyle.getCantidad();
            }
            return total;
        }, 0);
        let newProducts = [...productsBuscar.filter((e) => {
            if (e.getClave() === actualClave) {
                e.updateCantidad(newCount);
            }
            return e;
        })]
        setProductsStyles([...newProductsStyles]);
        setProductsBuscar([...newProducts]);
        setProductEdit(null)
        setClickedButton('Add')
    }
    const Volver = () => {
        setProducts([...productsBuscar]);
        setTypeCards('Normal');
        setProductEdit(null);
    }
    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Productos"}
                icon={"src/assets/Icons/icons8-productos-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <SearchBar Buscar={typeCards === 'Normal' ? BuscarProducto : BuscarStyle} SearchButtons={Btns} Buttons={typeCards === 'Normal' ?
                <ButtonAdd handleButtonClick={handleButtonClick} SeeForm={() => setProductEdit(null)} clickedButton={clickedButton} />
                :
                <ButtonsFormEdit Volver={Volver} handleButtonClick={handleButtonClick} SeeForm={() => setProductEdit(null)} clickedButton={clickedButton} />
            } />
            <div className="ContentAdmin">
                <CardsProducts ProductsStyles={productsStyles} SeeProductStyles={SeeProductStyles} TypeCards={typeCards} Editar={Editar} Products={products} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={typeCards === 'Normal' ? productEdit ? "Editar Producto" : "Agregar Producto" : productEdit ? "Editar Estilo" : "Agregar Estilo"}
                    Content={
                        productEdit ?
                            typeCards === 'Normal' ?
                                <FormEditProduct
                                    Update={updateProduct}
                                    DeleteProduct={() => {
                                        RemoveProduct(productEdit.product);
                                        setProductEdit(null);

                                    }} ProductE={productEdit.product} Tip={productEdit.claveProduct} />
                                :
                                <FormEditProductStyle
                                    Update={updateProductStyle}
                                    DeleteProduct={() => {
                                        RemoveStyle(productEdit.product);
                                        setClickedButton('Add');
                                        setProductEdit(null);
                                    }} ProductE={productEdit.product} Tip={productEdit.claveProduct} />
                            :
                            typeCards === 'Normal' ?
                                <FormAddProduct
                                    ClaveActual={claveActual}
                                    AddProduct={(newProduct) => {
                                        setProductsBuscar([...productsBuscar, newProduct]);
                                        setProducts([...productsBuscar]);

                                    }} />
                                :
                                <FormAddProductStyle
                                    ClaveActual={claveActual}
                                    AddProduct={(newProduct) => {
                                        let Style = new ProductStyle(
                                            newProduct.clave,
                                            newProduct.nombre,
                                            newProduct.cantidad,
                                            newProduct.precio,
                                            newProduct.categoria,
                                            newProduct.descripcion,
                                            newProduct.img
                                        )
                                        setProductsStyles((prevStyles) => {
                                            const updatedStyles = [...prevStyles, Style];

                                            const newCount = updatedStyles.reduce((total, productStyle) => {
                                                if (productStyle.getClave() === Style.getClave()) {
                                                    return total + productStyle.getCantidad();
                                                }
                                                return total;
                                            }, 0);

                                            const updatedProducts = [...productsBuscar.filter((product) => {
                                                if (product.getClave() === Style.getClave()) {
                                                    product.updateCantidad(newCount);
                                                }
                                                return product;
                                            })];
                                            setProductsBuscar([...updatedProducts]);
                                            setProducts([...updatedStyles.filter((e) => e.getClave() === Style.getClave())]);

                                            return updatedStyles;
                                        });

                                    }} />
                    } />
            </div>
        </>
    )
}