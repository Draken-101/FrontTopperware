import './TopExistenciaCard.styl';

export function TopExistenciaCard({title, count}){
    return(
        <div className='ContainerTopExistenciaCard'>
            <span className='HeaderSpan'>
                {title}
            </span>
            <span className='CountSpan'>
                {count}
            </span>
        </div>
    )
}