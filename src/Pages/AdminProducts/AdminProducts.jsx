import { useEffect, useState } from "react";
import './AdminProducts.styl'
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { Products } from "../../Datos/Datos.Products";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { FormAddProduct } from "./Components/Organims/FormAddProduct";
import { ButtonAdd } from "../../Components/Molecules/ButtonAdd";
import { FormEditProduct } from "./Components/Organims/FormEditProduct";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { CardsProducts } from "./Components/Organims/CardsProducts";
import { useNavigate } from "react-router-dom";
import { Tip } from "../../Datos/Datos.Tips";
import { AlertComponent } from "../../Components/Organims/AlertComponent";
import { Add, Btns } from "./Data/Datos.Valores";
import { ProductsStyles } from "../../Datos/Datos.ProductsStyles";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";
export function AdminProducts() {
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState([]);
    let productsBuscar;
    const [productEdit, setProductEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const tipActual = Tip();
    useEffect(() => {
        const fetchData = async () => {
            try {
                productsBuscar = await Products();
                setStyles(await ProductsStyles())
                setProducts(productsBuscar);
                setClickedButton('Add');
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);
    const Editar = (product) => {
        setProductEdit({
            product: product,
            claveProduct: product.clave
        });
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
    const handleDelete = async (clave) => {
        try {
            let headers = {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'token': localStorage.getItem('token')
            }
            await axios.delete(`http://localhost:3000/api/products/${clave}`, { headers: headers })
                .then(res => {
                    console.log(res);
                    res.data.error ? navigate('/Login') : setAlert(Add('Delete', res.data.message, () => <DeleteForeverIcon />));
                });
            setProductEdit(null);
            setClickedButton('Add');
            setFetchTrigger(!fetchTrigger);
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };
    return (
        <>
            <AlertComponent alert={alert} />
            <HeaderAdmin
                Title={"Administracion de Productos"}
                icon={"/assets/Icons/icons8-productos-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <SearchBar Buscar={BuscarProducto} SearchButtons={Btns}
                Buttons={
                    <ButtonAdd handleButtonClick={(id) => handleButtonClick(id)} SeeFormAdd={() => setProductEdit(null)} clickedButton={clickedButton} />
                } />
            <div className="ContentAdmin">
                <CardsProducts Styles={styles} Editar={(product) => Editar(product)} Products={products} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={productEdit ? "Editar Producto" : "Agregar Producto"}
                    Content={
                        productEdit ?
                            <FormEditProduct
                                Update={(alert) => {
                                    setAlert(alert);
                                    setFetchTrigger(!fetchTrigger);
                                    setProductEdit(null);
                                }}
                                DeleteProduct={(clave) => handleDelete(clave)}
                                Product={productEdit.product} Tip={productEdit.claveProduct} />
                            :
                            <FormAddProduct
                                AddProduct={(alert) => {
                                    setAlert(alert);
                                    setFetchTrigger(!fetchTrigger);
                                }} />
                    } />
            </div>
        </>
    )
}