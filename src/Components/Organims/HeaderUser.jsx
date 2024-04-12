import { Header } from "../Atoms/Header";
import { DataTop1 } from "../../Pages/UserPage/Components/Molecules/DataTop1";
import { IconPage } from "../../Pages/UserPage/Components/Molecules/IconPage";
import { Nav } from "../Molecules/Nav";
import { useState } from "react";

export function HeaderUser({Icon, Data, Entrepreneur, path}){
    const [entrepreneur, setEntrepreneur] = useState({...Entrepreneur});
    return(
        <Header>
            <DataTop1 Entrepreneur={entrepreneur}/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} path={path} />
        </Header>
    )
}