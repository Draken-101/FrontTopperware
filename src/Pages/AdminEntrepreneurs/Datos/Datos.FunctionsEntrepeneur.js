export function CalcularUltimoTip(Tips, Tip) {
    let ultimoTip = {
        tip: "",
        semana1: "",
        semana2: "",
        semana3: ""
    };

    if (Array.isArray(Tips)) {
        ultimoTip = {...Tips.find(tip => tip.tip == Tip)};

        console.log(Tips);
        return ultimoTip;
    }

    return Tips;
}


export function AcomodarEntrepreneurs(newEntrepreneurs) {
    
    newEntrepreneurs.sort((a, b) => b.totalVenta - a.totalVenta);
    newEntrepreneurs = [...newEntrepreneurs.map((e, top)=> {
        top +=1; 
        e.updateTop(top)
        return e;
    }, 0)]
    return newEntrepreneurs;
}

