export const Valor = {
    name: "Tienda",
    icon: "src/assets/Icons/icons8-tienda-96.png"
}
export const Cambio = (page) => {
    if (page.name === "Tienda") {
        return({
                name: "Top",
                icon: "src/assets/Icons/icons8-corona-96.png"
            })
    } else {
        return({
            name: "Tienda",
            icon: "src/assets/Icons/icons8-tienda-96.png"
        })
    }
}
export const ProductSwitch = (seeProduct) => {
    if (seeProduct) {
        return(false)
    } else {
        return(true)
    }
}