const ingreso = document.querySelector(".ingreso");
const mensaje = document.querySelector(".mensaje");

const codificacion = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

function encriptar() {
  let palabra = ingreso.value;
  palabra = convertToLowerCase(palabra);
  let encriptada = codificar(palabra);
  ingreso.value = "";
  mensaje.style.backgroundImage = "none";
  mensaje.value = encriptada;
}

function desencriptar() {
  let palabra = ingreso.value;
  palabra = convertToLowerCase(palabra);
  let desencriptada = decodificar(palabra);
  ingreso.value = "";
  mensaje.style.backgroundImage = "none";
  mensaje.value = desencriptada;
}

function codificar(palabra) {
  
  let palabraEncriptada = "";

  for (let i = 0; i < palabra.length; i++) {
    if (codificacion[palabra[i]]) {
      palabraEncriptada += codificacion[palabra[i]];
    } else {
      palabraEncriptada += palabra[i];
    }
  }
  return palabraEncriptada;
}

function decodificar(palabra) {

  for (i in codificacion) {
    if (palabra.includes(codificacion[i])) {
        palabra = palabra.replaceAll(codificacion[i],i);
    }
  }

  return palabra;
}

function convertToLowerCase(palabra) {
  return palabra.toLowerCase();
}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
}