let createPhoneNumber = ([3,1,6,6,1,7,3,4,4,0]) //!Puedes agregar o quitar dígitos para validar la lógica del código
let numberPhone = phone (createPhoneNumber);

function phone(num) {
    let newPhone = num.join('');
    newPhone = newPhone.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")
    
if (newPhone.length > 14 || newPhone.length < 14){ //Condición para que se digite la cantidad de dígitos correcto
   console.log("¡Valor errado! el array debe tener 10 dígitos de tipo número")
    
} else
console.log("El número telefónico es:" +" " + newPhone)
}