
export function Countries(){
    const C = require('./countries.json');
    C = [...C.countries];
    console.log(C)
}