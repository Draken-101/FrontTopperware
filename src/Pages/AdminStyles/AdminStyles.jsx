import { useEffect, useState } from "react";
import { NavAdmin } from "./Components/Molecules/NavAdmin";
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
import { getStyles } from "../../Datos/Datos.Styles";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";
import { FondoCarga } from "../../Components/Organims/FondoCarga";
export function AdminStyles() {
    const [open, setOpen] = useState(false);
    let { clave } = useParams()
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [styles, setStyles] = useState([]);
    const [stylesBuscar, setStylesBuscar] = useState([]);
    const [stylesEdit, setStylesEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const [alert, setAlert] = useState(null);
    const [carga, setCarga] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedStyles = await getStyles();
                let stylesFound = fetchedStyles.filter((style) => style.clave.split('-')[0] === clave);
                setStylesBuscar(stylesFound);
                setStyles(stylesFound)
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
        let headers = {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'token': localStorage.getItem('token')
        }
        setCarga(true);
        await axios.delete(`http://3.135.157.51:27017/api/estilos/${clave}`, { headers: headers })
            .then(res => {
                setCarga(false);
                console.log(res);
                res.data.error ? navigate('/Login') : setAlert(Add('Delete', res.data.message, () => <DeleteForeverIcon />));
            }).catch(error => {
                setCarga(false);    
                navigate('/Login');
                console.error('Error al eliminar:', error);
            });
        setStylesEdit(null);
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
            <SearchBar
                Buscar={BuscarStyle}
                SearchButtons={Btns}
                Buttons={
                    <ButtonsFormEdit
                        open={open}
                        closeForm={() => {
                            setOpen(false);
                            setClickedButton(null);
                        }}
                        handleButtonClick={handleButtonClick}
                        clickedButton={clickedButton}
                        SeeFormAdd={() => {
                            setStylesEdit(null);
                            setOpen(true);
                        }} />
                } />
            <div className={`ContentAdmin ${open ? 'openFormAdd' : ''}`}>
                <CardsProducts openForm={() => setOpen(true)} Form={open} Styles={styles} Editar={(product) => Editar(product)} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    openForm={open}
                    title={stylesEdit ? "Editar Estilo" : "Agregar Estilo"}
                    Content={
                        stylesEdit ?
                            <FormEditStyle
                                onOffCarga={(value) => setCarga(value)}
                                Alert={(alert) => {
                                    setAlert(alert);
                                }}
                                Update={() => {
                                    setStylesEdit(null);
                                    setFetchTrigger(!fetchTrigger);
                                }}
                                DeleteStyle={(clave) => handleDelete(clave)}
                                Style={stylesEdit.style} claveProduct={clave} />
                            :
                            <FormAddStyle
                                onOffCarga={(value) => setCarga(value)}
                                ClaveActual={clave}
                                Alert={(alert) => {
                                    setAlert(alert);
                                }}
                                AddStyle={() => {
                                    setFetchTrigger(!fetchTrigger);
                                }} />
                    } />
            </div>
        </>
    )
}