
export const buscarStyle = (value, type, Styles) => {
    if (value === "") {
        return {};
    }
    switch (type) {
        case "Clave":
            return {...Styles.filter(({ clave }) => clave === value)[0]};
        default:
            return {...Styles.filter((styles) => {
                return styles.nombre.toLowerCase().includes(value.toLowerCase());
            })[0]};
    } 
}