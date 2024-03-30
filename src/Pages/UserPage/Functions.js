export const Cambio = (page) => {
    if (page.pageName === "Tienda") {
        return(top)
    } else{
        return(tienda)
    }
}
export function Switch(see){
    if (see) {
        return(false)
    } else {
        return(true)
    }
}
export const tienda = {
    pageName:"Tienda",
    icon: "src/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton:"src/assets/Icons/icons8-corona-96.png"
}
export const top = {
    pageName:"Top",
    icon: "src/assets/Icons/icons8-corona-96.png",
    nameButton: "Tienda",
    iconButton:"src/assets/Icons/icons8-tienda-96.png"
}
export const productInfo = {
    pageName:"ProductInfo",
    icon: "src/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton:"src/assets/Icons/icons8-corona-96.png"
}
export const shoppingCart = {
    pageName:"ShoppingCart",
    icon: "src/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton:"src/assets/Icons/icons8-corona-96.png"
}
export const shippingForm = {
    pageName:"ShippingForm",
}
export const confirmOrder = {
    pageName:"ConfirmOrder",
}