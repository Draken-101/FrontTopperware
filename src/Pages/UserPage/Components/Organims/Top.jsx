import styled from 'styled-components';
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { Card } from '../../../../Components/Molecules/Card';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    padding: .5vw 2vw;
    width: calc(100% - 4vw);
    height: calc(100vh - 9vw);
    .ContainerCards{
        display: flex;
        flex-wrap: wrap;
        gap: 1vw;
        width: 100%;
        height: fit-content;
        max-height: calc(100% - 3vw);
        overflow: hidden;
        overflow-y: scroll;
    }
    .ContainerCards::-webkit-scrollbar {
        width: 0px;
    }
`;
export function Top(){
    const Type = { 
        name:"Top",
        number:1
    }
    return(
        <Container>
            <SearchBar/>
            <div className='ContainerCards'>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
            </div>
        </Container>
    )
}