import { useEffect, useState } from "react";
import './AdminEntrepreneurs.styl'
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { CardsEntrepreneurs } from "./Components/Organims/CardsEntrepreneurs";
import { HeaderAdmin } from "../../Components/Organims/HeaderAdmin";
import { AdminControls } from "../../Components/Organims/AdminControls";
import { ButtonAdd } from "../../Components/Molecules/ButtonAdd";
import { FormAddEntrepreneur } from "./Components/Organims/FormAddEntrepreneur";
import { FormEditEntrepreneur } from "./Components/Organims/FormEditEntrepreneur";
import { AcomodarEntrepreneurs, CalcularUltimoTip } from "../../Datos/Datos.FunctionsEntrepeneur";
import { Entrepreneurs } from "../../Datos/Datos.Entrepreneurs";
import { Tip } from "../../Datos/Datos.Tips";
export function AdminEntrepreneurs() {
    const [clickedButton, setClickedButton] = useState(0);
    const handleButtonClick = (buttonId) => setClickedButton(buttonId);
    const [entrepreneurs, setEntrepreneurs] = useState([...Entrepreneurs()]);
    const [entrepreneursBuscar, setEntrepreneursBuscar] = useState([...entrepreneurs]);
    const [tipActual, setTipActual] = useState(Tip);
    const [userEdit, setUserEdit] = useState(null);
    const Buscar = (value, type) => {
        if (value === ""){
            setEntrepreneurs([...entrepreneursBuscar]);
            return;
          }  
        let Entrepreneurs = [];
        switch (type) {
            case "Numero de Cliente":
                Entrepreneurs = [...entrepreneursBuscar.filter(({ numeroCliente }) => numeroCliente === value)];
                break;
            case "Top":
                Entrepreneurs = [...entrepreneursBuscar.filter(({ top }) => top === value)];
                break;
            case "Total Venta":
                Entrepreneurs = [...entrepreneursBuscar.filter(({totalVenta}) => totalVenta <= value )];
                console.log(value)
                break;
            default:
                Entrepreneurs = [...entrepreneursBuscar.filter((e) => {
                        const V = new RegExp(value, "i");
                        console.log(V)
                        return V.test(`${e.nombres} ${e.apellidos}`);
                    })];
                break;
        }
        setEntrepreneurs([...Entrepreneurs]);
    }
    const Editar = (entrepreneur) => {
        setUserEdit({
            user: entrepreneur,
            tip: { ...CalcularUltimoTip(entrepreneur.tips, tipActual) }
        });
    }
    const RemoveUser = (entrepreneurDelete) => {
        const newEntrepreneurs = [...entrepreneursBuscar.filter(ente => ente.numeroCliente !== entrepreneurDelete.numeroCliente)];
        setEntrepreneurs([...AcomodarEntrepreneurs(newEntrepreneurs)]);
        setEntrepreneursBuscar([...AcomodarEntrepreneurs(newEntrepreneurs)])
    }
    const updateEntrepreneur = (newEntrepreneur) => {
        let newEntrepreneurs = [...entrepreneurs.filter((e) => {
            if (e.numeroCliente === newEntrepreneur.numeroCliente) {
                e.updateEntrepreneur(
                    // nombres, apellidos, totalVenta, tips, img
                    newEntrepreneur.nombres,
                    newEntrepreneur.apellidos,
                    newEntrepreneur.totalVenta,
                    newEntrepreneur.tips,
                    newEntrepreneur.img
                )
            }
            return e;
        })]
        setEntrepreneurs([...AcomodarEntrepreneurs(newEntrepreneurs)]);
        setUserEdit(null)
        setClickedButton(0)
    }
    return (
        <>
            <HeaderAdmin
                Title={"Administracion de Emprendedoras"}
                icon={"src/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
                Nav={<NavEntrepreneurs />}
            />
            <div className="ContentAdmin">
                <CardsEntrepreneurs Buscar={Buscar} key={entrepreneurs} Editar={Editar} Entrepreneurs={entrepreneurs} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                <AdminControls
                    title={userEdit ? "Editar Emprendedora" : "Agregar Emprendedora"}
                    Buttons={<ButtonAdd handleButtonClick={handleButtonClick} SeeForm={() => setUserEdit('')} clickedButton={clickedButton} />}
                    Content={
                        userEdit ?
                            <FormEditEntrepreneur TipActual={tipActual} Update={updateEntrepreneur}
                                DeleteUser={() => { RemoveUser(userEdit.user); setUserEdit(''); setClickedButton(0); }}
                                Entrepreneur={userEdit.user} Tip={userEdit.tip} />
                            :
                            <FormAddEntrepreneur TipActual={tipActual} AddEntrepreneur={(Entrepreneur) => {
                                let E = [...entrepreneursBuscar, Entrepreneur];
                                setEntrepreneurs([...AcomodarEntrepreneurs([...E])])
                            }} />} />
            </div>
        </>
    )
}