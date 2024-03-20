import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { Card } from '../../../../Components/Molecules/Card';
import { CardTop } from '../Molecules/CardTop';
export function Top(){
    return(
        <>
            <SearchBar/>
            <div className='ContainerCards'>
                <CardTop/>
            </div>
        </>
    )
}