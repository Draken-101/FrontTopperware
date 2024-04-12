import { Header } from "../../../../Components/Atoms/Header";
import { DataTop1 } from "../Molecules/DataTop1";
import { IconPage } from "../Molecules/IconPage";
import { Nav } from "../../../../Components/Molecules/Nav";

export function HeaderUser({Icon, Data, OnClick, Entrepreneur}){
    return(
        <Header>
            <DataTop1 Entrepreneur={Entrepreneur}/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} OnClick={OnClick}/>
        </Header>
    )
}