let = nombres = ["Juan","Juan","Maria","Maria","Camilo","Camilo"] //!Los nombres se deben escribir iguales (mayusculas y minusculas) para su correcta ejecución
let resultado = countNameRepetitions (nombres)

function countNameRepetitions(names){
    contador = {}
    names.forEach(function(name) {
    contador[name] = (contador[name]||"")+"*"    
})
return contador
}
console.log(contador)

