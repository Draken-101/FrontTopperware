export function useBuscarEntrepreneurs(value, type, Entrepreneurs){
    let newEntrepreneurs = [];
    switch (type) {
        case "numero de cliente":
            newEntrepreneurs = [...Entrepreneurs.filter(({ numeroCliente }) => numeroCliente === value)];
            break;
        case "Top":
            newEntrepreneurs = [...Entrepreneurs.filter(({ top }) => {
                console.log(top == value);
                return top == value
            })];
            break;
        case "Total Venta":
            newEntrepreneurs = [...Entrepreneurs.filter(({ totalVenta }) => totalVenta <= value)];
            console.log(value)
            break;
        default:
            newEntrepreneurs = [...Entrepreneurs.filter((e) => {
                let Nombres = e.getNombreCompleto();
                return Nombres.toLowerCase().includes(value.toLowerCase());
            })];
            break;
    }
    return [...newEntrepreneurs]
}
