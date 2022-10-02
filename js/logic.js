let secuencia = [];
let errores = [];
let tiempoMax = 15;
let tiempoActual = 0;

inicializarSecuencia();

function inicializarSecuencia() {
  for (let i = 0; i < 10; i++) {
    let letter = "";
    switch (random(1, 4)) {
      case 1:
        letter = "A";
        break;
      case 2:
        letter = "S";
        break;
      case 3:
        letter = "D";
        break;
      case 4:
        letter = "F";
        break;
    }
    secuencia.push(letter);
  }
  console.log(secuencia);
  contador();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function validarCLick(letra) {
  if (letra !== secuencia[0]) {
    errores.push(secuencia[0]);
    secuencia.shift();
  } else {
    secuencia.shift();
  }
  console.log(secuencia);
  console.log(errores);
  validarGameOver();
}

function validarTeclado(event) {
  var codigo = event.which || event.keyCode;
  switch(codigo){
    case 65:
    case 83:
    case 68:
    case 70:
        validarCLick(String.fromCharCode(codigo));
        break;
  }
}

function validarGameOver(){
    if(secuencia.length==0)
    window.location.href = "#popup1";
}

function contador (){
    if (secuencia.length>0&&tiempoActual!==tiempoMax){
        console.log(tiempoActual)
        tiempoActual++;
        setTimeout(() => {
            contador()
          }, "1000")
    }
}