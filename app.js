let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let = valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sorteamos todos los numeros.
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento("p","ya se sortearon todos los numeros");
    }else{
        
    }

    // si el numero generado está incluido en la lista hacemos un if-else
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();