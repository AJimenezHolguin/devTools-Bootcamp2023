function next_pal(number) {
  number++; // Aumenta el número en 1
    while (!esPalindromo(number)) {
      number++; // Aumenta hasta encontrar el siguiente palíndromo
    }
    return number;
  }
  
  function esPalindromo(number) {
    let numberString = number.toString();
    let longitud = numberString.length;
    for (let i = 0; i < longitud / 2; i++) {
      if (numberString[i] !== numberString[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let numberInicial = 1254525;
  let siguientePalindromo = next_pal(numberInicial);
  console.log("El siguiente número palíndromo a partir de " + numberInicial + " es: " + siguientePalindromo);
  


  
  
  

