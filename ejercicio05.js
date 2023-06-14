const drawX = (size) => {
    for (let i = 0; i < size; i++) {
      let x = '';
      for (let j = 0; j < size; j++) {
        if (j === i || j === size - 1 - i) {
          x += '*';
        } else {
          x += ' ';
        }
      }
      console.log(x);
    }
  }
  
  drawX(6); //* ingresa un numero para correr la función