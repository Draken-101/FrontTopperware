import { Header } from "../Atoms/Header";
import { DataTop1 } from "../../Pages/UserPage/Components/Molecules/DataTop1";
import { IconPage } from "../../Pages/UserPage/Components/Molecules/IconPage";
import { Nav } from "../../Pages/UserPage/Components/Molecules/Nav";

export function HeaderUser({Icon, Data, OnClick}){
    return(
        <Header>
            <DataTop1/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} OnClick={OnClick}/>
        </Header>
    )
}