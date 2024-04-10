
export function Countries(){
    let C = require('./countries.json');
    C = [...C.countries];
    console.log(C)
}