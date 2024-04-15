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
export function AdminEntrepreneurs({ tipActual }) {
    const [clickedButton, setClickedButton] = useState(0);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    const [entrepreneursBuscar, setEntrepreneursBuscar] = useState([]);
    const [entrepreneurEdit, setEntrepreneurEdit] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setEntrepreneursBuscar(await getEntrepreneurs());
                setEntrepreneurs(await getEntrepreneurs());
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Emprendedoras"}
                icon={"/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <SearchBar Buscar={ async (value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, entrepreneursBuscar))} SearchButtons={Btns} Buttons={<ButtonAdd handleButtonClick={handleButtonClick} SeeFormAdd={() => setEntrepreneurEdit(null)} clickedButton={clickedButton} />} />
            <div className="ContentAdmin">
                <CardsEntrepreneurs Editar={(entrepreneur) => setEntrepreneurEdit(editarEntrepreneur(entrepreneur, tipActual))} Entrepreneurs={entrepreneurs} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={entrepreneurEdit ? "Editar Emprendedora" : "Agregar Emprendedora"}
                    Content={
                        entrepreneurEdit ?
                            <FormEditEntrepreneur
                                TipActual={tipActual}
                                Update={async (entrepreneur, numeroCliente) => {
                                    let res = await usePut(`http://localhost:3000/api/emprendedoras/${numeroCliente}`, localStorage.getItem('token'), entrepreneur);
                                    !res ? navigate('/Login') : console.log(res.message);
                                    makeFetch();
                                    setEntrepreneurs(ordenarEntrepreneurs(updateEntrepreneur(entrepreneur, entrepreneursBuscar)));
                                    setEntrepreneurEdit(null);
                                    setClickedButton('Add');
                                }}
                                DeleteUser={() => {
                                    setEntrepreneurs(ordenarEntrepreneurs(removeEntrepreneur(entrepreneurEdit.user, entrepreneursBuscar)));
                                    setEntrepreneurEdit(null);
                                    setClickedButton('Add');
                                }}
                                Entrepreneur={entrepreneurEdit.user} Tip={entrepreneurEdit.tip} />
                            :
                            <FormAddEntrepreneur
                                TipActual={tipActual}
                                AddEntrepreneur={async (entrepreneur) => {
                                    let res = await usePost('http://localhost:3000/api/emprendedoras', localStorage.getItem('token'), entrepreneur);
                                    !res ? navigate('/Login') : console.log(res.message);
                                    setEntrepreneurs(ordenarEntrepreneurs([...entrepreneursBuscar, entrepreneur]));
                                }} />} />
            </div>
        </>
    )
}