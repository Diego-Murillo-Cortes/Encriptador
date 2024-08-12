// Selecciona los elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const textosalida = document.querySelector(".texto-mensaje");
const copiar = document.querySelector(".copiar");

// Agrega los eventos de clic a los botones de encriptar y desencriptar
document.querySelector(".botonEncriptar").addEventListener("click", btnEncriptar);
document.querySelector(".botonDesencriptar").addEventListener("click", btnDesencriptar);

// Función para encriptar el texto
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    // Oculta la imagen de fondo y el texto de placeholder
    mensaje.style.backgroundImage = "none";
    textosalida.style.display = "none";
    copiar.style.display = "block"; // Muestra el botón de copiar
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        mensaje.style.backgroundImage = "none";
    textosalida.style.display = "none";
    copiar.style.display = "block";
    }
    return stringEncriptada
}

  
