const ingreso = document.querySelector(".ingreso");
const mensaje = document.querySelector(".mensaje");
const img = document.querySelector(".img");
const elementos = document.querySelector(".span");

const boton = document.querySelector(".btn-copiar");

img.src = "assets/Muñeco.svg";

const codificacion = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

if (mensaje.value == "") {
  boton.style.display = "none";
}

function encriptar() {
  if (ingreso.value == "") {
    alert("No hay nada por encriptar");
  } else {
    let palabra = ingreso.value;
    palabra = convertToLowerCase(palabra);
    let encriptada = codificar(palabra);
    ingreso.value = "";
    img.style.display = "none";
    mensaje.value = encriptada;
    elementos.style.display = "none";
    boton.style.display = "block";
  }
}

function desencriptar() {
  if (ingreso.value == "") {
    alert("No hay nada por desencriptar");
  } else {
    let palabra = ingreso.value;
    palabra = convertToLowerCase(palabra);
    let desencriptada = decodificar(palabra);
    ingreso.value = "";
    img.style.display = "none";
    elementos.style.display = "none";
    boton.style.display = "block";
    mensaje.value = desencriptada;
  }
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
      palabra = palabra.replaceAll(codificacion[i], i);
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
  alert("Copiado al portapapeles");
}
