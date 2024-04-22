import { Header } from "../Atoms/Header";
import { DataEntrepreneurTop1 } from "../Molecules/DataEntrepreneurTop1";
import { IconPage } from "../Molecules/IconPage";
import { Nav } from "../Molecules/Nav";

export function HeaderUser({Icon, Data, Entrepreneur, path}){
    return(
        <Header>
            <DataEntrepreneurTop1 Entrepreneur={Entrepreneur}/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} path={path} />
        </Header>
    )
}