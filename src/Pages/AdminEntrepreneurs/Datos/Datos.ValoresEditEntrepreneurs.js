export function ValoresEditEntrepreneurs(Entrepreneur, ultimoTip) {
    return ({
        nombres: Entrepreneur.nombres,
        apellidos: Entrepreneur.apellidos,
        email: Entrepreneur.email,
        phone: Entrepreneur.phone,
        numeroCliente: Entrepreneur.numeroCliente,
        semana1: ultimoTip.semana1,
        semana2: ultimoTip.semana2,
        semana3: ultimoTip.semana3,
        img: Entrepreneur.img
    })
}