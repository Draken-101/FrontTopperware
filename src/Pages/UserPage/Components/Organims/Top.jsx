import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { Card } from '../../../../Components/Molecules/Card';
export function Top(){
    const Type = { 
        name:"Top",
        number:1
    }
    return(
        <>
            <SearchBar/>
            <div className='ContainerCards'>
                <Card Count={"5"} Gap={"1"} DisableEdit={1} Type={Type}/>
            </div>
        </>
    )
}