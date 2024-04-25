import { useEffect, useState } from "react";
import './AdminEntrepreneurs.styl'
import { NavAdmin } from "./Components/Molecules/NavAdmin";
import { CardsEntrepreneurs } from "./Components/Organims/CardsEntrepreneurs";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { FormAddEntrepreneur } from "./Components/Organims/FormAddEntrepreneur";
import { FormEditEntrepreneur } from "./Components/Organims/FormEditEntrepreneur";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { buscarEntrepreneur, editarEntrepreneur, getEntrepreneurs } from "../../Datos/Datos.Entrepreneurs";
import { Add, Btns } from "./Datos/Datos.Valores";
import { useNavigate } from "react-router-dom";
import { getTipActual } from "../../Datos/Datos.getTipActual";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AlertComponent } from "../../Components/Organims/AlertComponent";
import { ButtonsAdminControls } from "./Components/Molecules/ButtonsAdminControls";
import { FondoCarga } from "../../Components/Organims/FondoCarga";
export function AdminEntrepreneurs() {
    const [open, setOpen] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    const [entrepreneursBuscar, setEntrepreneursBuscar] = useState([]);
    const [entrepreneurEdit, setEntrepreneurEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const tipActual = getTipActual();
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEntrepreneurs = await getEntrepreneurs()
                setEntrepreneursBuscar([...fetchedEntrepreneurs]);
                setEntrepreneurs([...fetchedEntrepreneurs]);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);

    const handleDelete = async (numeroCliente) => {
        try {
            let headers = {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'token': localStorage.getItem('token')
            }
            await axios.delete(`http://3.135.157.51:27017/api/emprendedoras/${numeroCliente}`, { headers: headers })
                .then(res => {
                    console.log(res);
                    res.data.error ? navigate('/Login') : setAlert(Add('Delete', res.data.message, () => <DeleteForeverIcon />));
                });
            setEntrepreneurEdit(null);
            setClickedButton('Add');
            setFetchTrigger(!fetchTrigger);
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };
    return (
        <>
            <FondoCarga carga={carga} />
            <AlertComponent alert={alert} />
            <HeaderAdmin
                Title={"Administracion de Emprendedoras"}
                icon={"/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
                Nav={<NavAdmin />}
            />
            <SearchBar
                Buscar={(value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, entrepreneursBuscar))}
                SearchButtons={Btns}
                Buttons={<ButtonsAdminControls
                    open={open}
                    closeForm={() => {
                        setOpen(false);
                        setClickedButton(null);
                    }}
                    handleButtonClick={handleButtonClick}
                    clickedButton={clickedButton}
                    SeeFormAdd={() => {
                        setEntrepreneurEdit(null);
                        setOpen(true);
                    }} />} />
            <div className={`ContentAdmin ${open ? 'openFormAdd' : ''}`}>
                <CardsEntrepreneurs openForm={() => setOpen(true)} Form={open} Editar={(entrepreneur) => setEntrepreneurEdit(editarEntrepreneur(entrepreneur, tipActual))} Entrepreneurs={entrepreneurs} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    openForm={open}
                    title={entrepreneurEdit ? "Editar Emprendedora" : "Agregar Emprendedora"}
                    Content={
                        entrepreneurEdit ?
                            <FormEditEntrepreneur
                            
                            onOffCarga={(value) => setCarga(value)}
                                Alert={(alert) => {
                                    setAlert(alert);
                                }}
                                openForm={open}
                                TipActual={tipActual}
                                Update={() => {
                                    setFetchTrigger(!fetchTrigger);
                                    setEntrepreneurEdit(null);
                                    setClickedButton('Add');
                                }}
                                DeleteUser={(numeroCliente) => handleDelete(numeroCliente)}
                                Entrepreneur={entrepreneurEdit.user} Tip={entrepreneurEdit.tip} />
                            :
                            <FormAddEntrepreneur
                            onOffCarga={(value) => setCarga(value)}
                                Alert={(alert) => {
                                    setAlert(alert);
                                }}
                                openForm={open}
                                TipActual={tipActual}
                                AddEntrepreneur={(alert) => {
                                    setAlert(alert);
                                    setFetchTrigger(!fetchTrigger);
                                }} />
                    } />
            </div>
        </>
    )
}