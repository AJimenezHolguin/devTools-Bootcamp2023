
function countNameRepetitions(names){
    contador = {}
    names.forEach(function(name) {
    contador[name] = (contador[name]||"")+"*"    
})
return contador
}

let resultado = countNameRepetitions (nombres)
let = nombres = ["Juan","Juan","Maria","Maria","Camilo","Camilo"] //!Los nombres se deben escribir iguales (mayusculas y minusculas) para su correcta ejecución

console.log(contador)
