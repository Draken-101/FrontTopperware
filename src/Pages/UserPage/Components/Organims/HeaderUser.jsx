import { Header } from "../../../../Components/Atoms/Header";
import { DataTop1 } from "../Molecules/DataTop1";
import { IconPage } from "../Molecules/IconPage";
import { Nav } from "../Molecules/Nav";

export function HeaderUser({Icon, Data, OnClick}){
    return(
        <Header>
            <DataTop1/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} OnClick={OnClick}/>
        </Header>
    )
}