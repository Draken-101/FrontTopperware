import { useEffect, useState } from "react";
import './AdminProducts.styl'
import { NavAdmin } from "./Components/Molecules/NavAdmin";
import { getProducts } from "../../Datos/Datos.Products";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { FormAddProduct } from "./Components/Organims/FormAddProduct";
import { FormEditProduct } from "./Components/Organims/FormEditProduct";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { CardsProducts } from "./Components/Organims/CardsProducts";
import { useNavigate } from "react-router-dom";
import { AlertComponent } from "../../Components/Organims/AlertComponent";
import { Add, Btns } from "./Data/Datos.Valores";
import { getStyles } from "../../Datos/Datos.Styles";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";
import { ButtonsAdminControls } from "./Components/Molecules/ButtonsAdminControls";
import { FondoCarga } from "../../Components/Organims/FondoCarga";
export function AdminProducts() {
    const [open, setOpen] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState([]);
    const [productsBuscar, setProductsBuscar] = useState([]);
    const [productEdit, setProductEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const [carga, setCarga] = useState(false);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedProducts = await getProducts();
                let fetchedStyles = await getStyles();
                setStyles([...fetchedStyles])
                setProducts([...fetchedProducts]);
                setProductsBuscar([...fetchedProducts])
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
        let headers = {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'token': localStorage.getItem('token')
        }
        await axios.delete(`http://3.135.157.51:27017/api/products/${clave}`, { headers: headers })
            .then(res => {
                console.log(res);
                res.data.error ? navigate('/Login') : setAlert(Add('Delete', res.data.message, () => <DeleteForeverIcon />));
            }).catch(error => {
                navigate('/Login');
                console.error('Error al eliminar:', error);
            });;
        setProductEdit(null);
        setClickedButton('Add');
        setFetchTrigger(!fetchTrigger);
    };
    return (
        <>
            <FondoCarga carga={carga} />
            <AlertComponent alert={alert} />
            <HeaderAdmin
                Title={"Administracion de Productos"}
                icon={"/assets/Icons/icons8-productos-96.png"}
                Nav={<NavAdmin />}
            />
            <SearchBar Buscar={BuscarProducto} SearchButtons={Btns}
                Buttons={<ButtonsAdminControls
                    open={open}
                    closeForm={() => {
                        setOpen(false);
                        setClickedButton(null);
                    }}
                    handleButtonClick={handleButtonClick}
                    clickedButton={clickedButton}
                    SeeFormAdd={() => {
                        setProductEdit(null);
                        setOpen(true);
                    }} />} />
            <div className={`ContentAdmin ${open ? 'openFormAdd' : ''}`}>
                <CardsProducts openForm={() => setOpen(true)} Form={open} Styles={styles} Editar={(product) => Editar(product)} Products={products} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    openForm={open}
                    title={productEdit ? "Editar Producto" : "Agregar Producto"}
                    Content={
                        productEdit ?
                            <FormEditProduct
                                onOffCarga={(value) => setCarga(value)}
                                openForm={open}
                                Alert={(alert) => {
                                    setAlert(alert);
                                }}
                                Update={() => {
                                    setFetchTrigger(!fetchTrigger);
                                    setProductEdit(null);
                                }}
                                DeleteProduct={(clave) => handleDelete(clave)}
                                Product={productEdit.product} Tip={productEdit.claveProduct} />
                            :
                            <FormAddProduct
                                onOffCarga={(value) => setCarga(value)}
                                openForm={open}
                                AddProduct={(alert) => {
                                    setAlert(alert);
                                    setFetchTrigger(!fetchTrigger);
                                }} />
                    } />
            </div>
        </>
    )
}