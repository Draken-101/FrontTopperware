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
import { useNavigate } from "react-router-dom";
import { usePut } from "../../Fetching/usePut";
import { useDelete } from "../../Fetching/useDelete";
import { Tip } from "../../Datos/Datos.Tips";
export function AdminEntrepreneurs() {
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    let entrepreneursBuscar;
    const [entrepreneurEdit, setEntrepreneurEdit] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(true);
    const navigate = useNavigate();
    const tipActual = Tip(); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEntrepreneurs = await getEntrepreneurs();
                const sortedEntrepreneurs = ordenarEntrepreneurs(fetchedEntrepreneurs);
                setEntrepreneurs(sortedEntrepreneurs);
                setClickedButton('Add');
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, [fetchTrigger]);

    const handleUpdate = async (entrepreneur, numeroCliente) => {
        try {
            let res = await usePut(`http://localhost:3000/api/emprendedoras/${numeroCliente}`, entrepreneur);
            !res ? navigate('/Login') : console.log(res.message);
            setEntrepreneurEdit(null);
            setClickedButton('Add');
            setFetchTrigger(prev => !prev); // Invierte el valor de fetchTrigger
        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    };

    const handleDelete = async (numeroCliente) => {
        try {
            let res = await useDelete(`http://localhost:3000/api/emprendedoras/${numeroCliente}`);
            !res ? navigate('/Login') : console.log(res.message);
            setEntrepreneurEdit(null);
            setClickedButton('Add');
            setFetchTrigger(prev => !prev);
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Emprendedoras"}
                icon={"/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <SearchBar Buscar={(value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, entrepreneursBuscar))} SearchButtons={Btns} Buttons={<ButtonAdd handleButtonClick={handleButtonClick} SeeFormAdd={() => setEntrepreneurEdit(null)} clickedButton={clickedButton} />} />
            <div className="ContentAdmin">
                <CardsEntrepreneurs Editar={(entrepreneur) => setEntrepreneurEdit(editarEntrepreneur(entrepreneur, tipActual))} Entrepreneurs={entrepreneurs} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={entrepreneurEdit ? "Editar Emprendedora" : "Agregar Emprendedora"}
                    Content={
                        entrepreneurEdit ?
                            <FormEditEntrepreneur
                                TipActual={tipActual}
                                Update={() => handleUpdate}
                                DeleteUser={() => handleDelete}
                                Entrepreneur={entrepreneurEdit.user} Tip={entrepreneurEdit.tip} />
                            :
                            <FormAddEntrepreneur
                                TipActual={tipActual}
                                AddEntrepreneur={() => setFetchTrigger(!fetchTrigger)} />
                    } />
            </div>
        </>
    )
}