import { useEffect, useState } from "react";
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { CardsProducts } from "./Components/Organims/CardsProducts";
import { ButtonsFormEdit } from "./Components/Molecules/ButtonsFormEdit";
import { FormEditStyle } from "./Components/Organims/FormEditStyle";
import { FormAddStyle } from "./Components/Organims/FormAddStyle";
import { useNavigate, useParams } from "react-router-dom";
import { AlertComponent } from "../../Components/Organims/AlertComponent";
import { Add, Btns } from "./Data/Datos.Valores";
import { ProductsStyles } from "../../Datos/Datos.ProductsStyles";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";
export function AdminStyles() {
    let { clave } = useParams()
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [styles, setStyles] = useState([]);
    let stylesBuscar;
    const [stylesEdit, setStylesEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                stylesBuscar = await ProductsStyles();
                stylesBuscar = [...stylesBuscar.filter((style) => style.clave.split('-')[0] === clave)]
                setStyles(stylesBuscar)
                setClickedButton('Add');
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);
    const Editar = (style) => {
        setStylesEdit({
            style: style,
            claveProduct: style.clave
        });
    }
    const BuscarStyle = (value, type) => {
        if (value === "") {
            setStyles([...stylesBuscar.filter((e) => e.getClave() === clave)]);
            return;
        }
        let Styles = [];
        switch (type) {
            case "clave":
                Styles = [...styles.filter((e) => {
                    let Clave = e.clave.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return Clave.toLowerCase().includes(value.toLowerCase());
                })];
                break;
            default:
                Styles = [...styles.filter((e) => {
                    let Nombre = e.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return Nombre.toLowerCase().includes(value.toLowerCase());
                })];
                break;
        }
        setStyles([...Styles.filter((e) => e.getClave() === clave)]);
    }
    const handleDelete = async (clave) => {
        try {
            let headers = {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'token': localStorage.getItem('token')
            }
            await axios.delete(`http://localhost:3000/api/estilos/${clave}`, { headers: headers })
                .then(res => {
                    console.log(res);
                    res.data.error ? navigate('/Login') : setAlert(Add('Delete', res.data.message, () => <DeleteForeverIcon />));
                });
            setStylesEdit(null);
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
            <SearchBar Buscar={BuscarStyle} SearchButtons={Btns}
                Buttons={
                    <ButtonsFormEdit handleButtonClick={(id) => handleButtonClick(id)} SeeForm={() => setStylesEdit(null)} clickedButton={clickedButton} />
                } />
            <div className="ContentAdmin">
                <CardsProducts Styles={styles} Editar={(product) => Editar(product)} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={stylesEdit ? "Editar Estilo" : "Agregar Estilo"}
                    Content={
                        stylesEdit ?
                            <FormEditStyle
                                Update={(alert) => {
                                    setAlert(alert);
                                    setStylesEdit(null);
                                    setFetchTrigger(!fetchTrigger);
                                }}
                                DeleteStyle={(clave) => handleDelete(clave)} 
                                Style={stylesEdit.style} claveProduct={clave} />
                            :
                            <FormAddStyle
                                ClaveActual={clave}
                                AddStyle={(alert) => {
                                    setAlert(alert);
                                    setFetchTrigger(!fetchTrigger);
                                }} />
                    } />
            </div>
        </>
    )
}