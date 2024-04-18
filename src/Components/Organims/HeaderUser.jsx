import { Header } from "../Atoms/Header";
import { DataTop1 } from "../../Pages/UserPage/Components/Molecules/DataTop1";
import { IconPage } from "../../Pages/UserPage/Components/Molecules/IconPage";
import { Nav } from "../Molecules/Nav";
import { useState } from "react";

export function HeaderUser({Icon, Data, Entrepreneur, path}){
    return(
        <Header>
            <DataTop1 Entrepreneur={Entrepreneur}/>
            <IconPage Icon={Icon}/>
            <Nav Data={Data} path={path} />
        </Header>
    )
}