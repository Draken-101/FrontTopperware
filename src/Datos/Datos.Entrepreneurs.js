export class Entrepreneur {
    constructor(nombres, apellidos, numeroCliente, top, totalVenta, tips, img) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.numeroCliente = numeroCliente;
        this.top = top;
        this.tips = [...tips];
        this.totalVenta = totalVenta;
        this.img = img;
    }

    updateEntrepreneur(nombres, apellidos, totalVenta, tips, img) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.tips = [...tips];
        this.totalVenta = totalVenta;
        this.img = img;
    }
    
    CalcularTotalVenta(Tips) {
        this.totalVenta = 0; 
        if(Tips){
            if (Array.isArray(Tips)) {
                this.tips = [...Tips]
                Tips.map((tip) => {
                    this.totalVenta += tip.semana1 + tip.semana2 + tip.semana3;
                })

            } else {
                this.tips = Tips;
                this.totalVenta = Tips.semana1 + Tips.semana2 + Tips.semana3;
            }
        }
    }
    updateTop(top) {
        this.top = top;
    }

    getNombreCompleto() {
        return `${this.nombres} ${this.apellidos}`.trim();
    }
}

import E from './Entrepreneurs.json';
export const Entrepreneurs = () => {
    let E2 = [...E.map((ente) => new Entrepreneur(ente.nombres, ente.apellidos, ente.numeroCliente, ente.top, ente.totalVenta, ente.tips, ente.img))];

    let EntrepreneurOrdenados = [...E2.sort((a, b) => b.totalVenta - a.totalVenta)];
    EntrepreneurOrdenados.map((e, top) => {
        top += 1;
        e.updateTop(top)
        return e;
    }, 0)
    return EntrepreneurOrdenados
}