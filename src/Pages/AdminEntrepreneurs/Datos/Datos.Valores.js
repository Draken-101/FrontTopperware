export const Btns = [
    {
        type: "numero de cliente",
        icon: "/assets/Icons/IconHash.svg"
    },
    {
        type: "Top",
        icon: "/assets/Icons/icons8-corona-96.png"
    },
    {
        type: "Total Venta",
        icon: "/assets/Icons/icons8-banco-96.png"
    },
]

export const Add = ( type, title, icon) => {
    return {
        type: type,
        title: title,
        icon:icon
    }
}