//----- Selección de Elementos -----//
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const textoEncriptar = document.querySelector(".area-texto");
const aviso = document.querySelector(".aviso-texto");
const respuesta = document.querySelector(".answer");
const contenido = document.querySelector(".mensaje-blanco");
//-Boton Encriptar -//
botonEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(
    /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,áéíóúàèìòù']/g, "");
   
    if (texto == "") {
        aviso.style.background = "#363657";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo del texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (txt !== texto) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto ingresado debe estar en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();

    }

});

//Boton Desencriptar//
botonDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(
    /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,áéíóúàèìòù']/g, "");

    if (texto == "") {
        aviso.style.background = "#363657";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo del texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (txt !== texto) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto ingresado debe estar en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
        
    }
});

//-------- Boton Copiar --------//
botonCopiar.addEventListener("click", e => {
    e.preventDefault(); 
    let copiar = respuesta;
    copiar.select();
    document.execCommand('copy'); 
});
