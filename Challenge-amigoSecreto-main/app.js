let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        limpiarCampo();
        actualizarListaAmigos();
        document.getElementById("amigo").focus();
    }
}

function limpiarCampo() {
    document.querySelector("#amigo").value = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let element = document.createElement("li");
        element.textContent = amigos[i];
        document.getElementById("listaAmigos").appendChild(element);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles");
    }else{
       let amigoSorteado = Math.floor(Math.random() * amigos.length);
       let resultado = document.getElementById("resultado");
       resultado.innerHTML = amigos[amigoSorteado];
    }
}

