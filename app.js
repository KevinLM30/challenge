// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
   let nombre = document.getElementById('amigo').value;

   if (nombre == '') {
        alert('Por favor, inserte un nombre.');
   } else {
    amigos.push(nombre);
    limpiarCuadro();
    actualizarLista()
   }
}

function limpiarCuadro() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos){
        let nombre = document.createElement("li");
        nombre.innerHTML = amigo;
        lista.appendChild(nombre);
    }
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indiceAleatorio];

        let actualizarResultado = document.getElementById('resultado');
        actualizarResultado.innerHTML = `El amigo sorteado es: ${sorteado}`;
        
    }
    
}