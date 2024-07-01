const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptador(){
    if(textArea.value==""){
        mensaje.value="Ningún mensaje fue encontrado";
    }else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage="none";
    }
    
}

function encriptar(textoIngresado){
    let combinaciones = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoIngresado = textoIngresado.toLowerCase();
    textoIngresado = textoIngresado.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    for(let i=0; i<combinaciones.length;i++){
        if(textoIngresado.includes(combinaciones[i][0])){
            textoIngresado = textoIngresado.replaceAll(combinaciones[i][0], combinaciones[i][1]);

        }
    }

    return textoIngresado;

}


function botonDesencriptador(){
    const textoDesncriptado = desencriptar(textArea.value);
    mensaje.value = textoDesncriptado;
    textArea.value = "";
    //mensaje.style.backgroundImage="none";
}

function desencriptar(textoDesencriptado){
    let combinaciones = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i<combinaciones.length;i++){
        if(textoDesencriptado.includes(combinaciones[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(combinaciones[i][1], combinaciones[i][0]);

        }
    }

    return textoDesencriptado;

}

function copiar() {
    let texto = mensaje;
    navigator.clipboard.writeText(mensaje.value)
    .then(() => {
    console.log('Contenido copiado al portapapeles');
    },() => {
    console.error('Error al copiar');
    });
}