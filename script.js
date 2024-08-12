const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje");
const textosalida = document.querySelector(".texto-mensaje")
const copiar = document.querySelector(".copiar")

btnEncriptar.addEventListener("click", function(){})

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    copiar.style.display = "block";
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    textosalida.value = none;
    copiar.style.display = "block";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiarTexto() {
    let mensaje = document.querySelector('.mensaje');
    navigator.clipboard.writeText(mensaje.value)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error("Error al copiar el texto: ", err);
      });
      
  }
  const btnCopiar = document.getElementById('copiar'); 
  

