import { useEffect, useState } from "react";
import './AdminEntrepreneurs.styl'
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { CardsEntrepreneurs } from "./Components/Organims/CardsEntrepreneurs";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { ButtonAdd } from "../../Components/Molecules/ButtonAdd";
import { FormAddEntrepreneur } from "./Components/Organims/FormAddEntrepreneur";
import { FormEditEntrepreneur } from "./Components/Organims/FormEditEntrepreneur";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { buscarEntrepreneur, editarEntrepreneur, getEntrepreneurs, ordenarEntrepreneurs, removeEntrepreneur, updateEntrepreneur } from "../../Datos/Datos.Entrepreneurs";
import { Btns } from "./Datos/Datos.Valores";
import { usePost } from "../../Fetching/usePost";
import { json, useNavigate } from "react-router-dom";
import { usePut } from "../../Fetching/usePut";
import { useDelete } from "../../Fetching/useDelete";
export function AdminEntrepreneurs({ tipActual }) {
    const [clickedButton, setClickedButton] = useState('Add');
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    const [entrepreneursBuscar, setEntrepreneursBuscar] = useState([]);
    const [entrepreneurEdit, setEntrepreneurEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setEntrepreneursBuscar(ordenarEntrepreneurs([...await getEntrepreneurs()]));
                setEntrepreneurs([...await getEntrepreneurs()]);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);
    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Emprendedoras"}
                icon={"/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <SearchBar Buscar={ (value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, entrepreneursBuscar))} SearchButtons={Btns} Buttons={<ButtonAdd handleButtonClick={handleButtonClick} SeeFormAdd={() => setEntrepreneurEdit(null)} clickedButton={clickedButton} />} />
            <div className="ContentAdmin">
                <CardsEntrepreneurs Editar={(entrepreneur) => setEntrepreneurEdit(editarEntrepreneur(entrepreneur, tipActual))} Entrepreneurs={entrepreneurs} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={entrepreneurEdit ? "Editar Emprendedora" : "Agregar Emprendedora"}
                    Content={
                        entrepreneurEdit ?
                            <FormEditEntrepreneur
                                TipActual={tipActual}
                                Update={async (entrepreneur, numeroCliente) => {
                                    let res = await usePut(`http://localhost:3000/api/emprendedoras/${numeroCliente}`, entrepreneur);
                                    !res ? navigate('/Login') : console.log(res.message);
                                    setEntrepreneurEdit(null);
                                    setClickedButton('Add');
                                    setFetchTrigger(!fetchTrigger);
                                }}
                                DeleteUser={async (numeroCliente) => {
                                    let res = await useDelete(`http://localhost:3000/api/emprendedoras/${numeroCliente}`);
                                    !res ? navigate('/Login') : console.log(res.message);
                                    setEntrepreneurEdit(null);
                                    setClickedButton('Add');
                                    setFetchTrigger(!fetchTrigger);
                                }}
                                Entrepreneur={entrepreneurEdit.user} Tip={entrepreneurEdit.tip} />
                            :
                            <FormAddEntrepreneur
                                TipActual={tipActual}
                                AddEntrepreneur={async (entrepreneur) => {
                                    let res = await usePost('http://localhost:3000/api/emprendedoras', entrepreneur);
                                    !res ? navigate('/Login') : console.log(res.message);
                                    setFetchTrigger(!fetchTrigger);
                                }} />} />
            </div>
        </>
    )
}