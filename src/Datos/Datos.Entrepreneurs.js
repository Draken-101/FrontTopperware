

// export function updateEntrepreneur(nombres, apellidos, totalVenta, tips, img) {
//     this.nombres = nombres;
//     this.apellidos = apellidos;
//     this.tips = [...tips];
//     this.totalVenta = totalVenta;
//     this.img = img;
// }

import axios from "axios";

export const updateEntrepreneur = (newEntrepreneur, Entrepreneurs) => {
    return [...Entrepreneurs.filter((entrepreneur) => {
        if (entrepreneur.numeroCliente === newEntrepreneur.numeroCliente) {
            entrepreneur.nombres = newEntrepreneur.nombres;
            entrepreneur.apellidos = newEntrepreneur.apellidos;
            entrepreneur.totalVenta = newEntrepreneur.totalVenta;
            entrepreneur.tips = newEntrepreneur.tips;
            entrepreneur.img = newEntrepreneur.img;
        }
        return entrepreneur;
    })]
}
export function CalcularTotalVenta(Tips) {
    return Tips.reduce((totalVenta, tip) => {
        return totalVenta += totalVenta + tip.semana1 + tip.semana2 + tip.semana3
    }, 0);
}

export function CalcularUltimoTip(Tips, actualTip) {
    let newTip = {
        ...Tips.filter((tip) => {
            if (tip.tip == actualTip) {
                return tip;
            }
        })
    }[0];
    return newTip ||
    {
        tip: actualTip,
        semana1: 0,
        semana2: 0,
        semana3: 0
    };
}

export const removeEntrepreneur = (entrepreneurDelete, Entrepreneurs) => {
    return [...Entrepreneurs.filter(entrepreneur => entrepreneur.numeroCliente !== entrepreneurDelete.numeroCliente)];
}

export const editarEntrepreneur = (entrepreneur, actualTip) => {
    return {
        user: entrepreneur,
        tip: CalcularUltimoTip(entrepreneur.tips, actualTip)
    };
}

export function ordenarEntrepreneurs(Entrepreneurs) {
    Entrepreneurs?.sort((a, b) => b.totalVenta - a.totalVenta)
    return [...Entrepreneurs.map((entrepreneur, top) => {
        top += 1;
        entrepreneur.top = top;
        return entrepreneur
    }, 0)]
}

export function getNombreCompleto(entrepreneur) {
    return `${entrepreneur.nombres} ${entrepreneur.apellidos}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const buscarEntrepreneur = (value, type, Entrepreneurs) => {
    if (value === "") {
        return Entrepreneurs;
    }
    switch (type) {
        case "numero de cliente":
            return [...Entrepreneurs.filter(({ numeroCliente }) => numeroCliente === value)];
        case "Top":
            return [...Entrepreneurs.filter((entrepreneur) => entrepreneur.top == value)];
        case "Total Venta":
            return [...Entrepreneurs.filter(({ totalVenta }) => totalVenta <= value)];
        default:
            return [...Entrepreneurs.filter((entrepreneur) => {
                let Nombres = getNombreCompleto(entrepreneur);
                return Nombres.toLowerCase().includes(value.toLowerCase());
            })];
    }
}

export const getEntrepreneurs = async () => {
    try {
        const entrepreneurs = await axios.get('http://localhost:3000/api/emprendedoras');
        const entrepreneurOrdenados = ordenarEntrepreneurs(entrepreneurs.data);
        return entrepreneurOrdenados;
    } catch (error) {
        return error;
    }
}
