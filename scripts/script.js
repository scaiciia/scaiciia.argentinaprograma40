let url = 'https://randomuser.me/api/?gender=male';

fetch(url)
    .then(response => response.json())
    .then(json => cargarAWeb(json))

function cargarAWeb(json) {
    console.log(json);
    let datos = json.results[0];
    document.getElementById("imagenPerfil").src = datos.picture.large;
    let nombreApellido = datos.name.first + " " + datos.name.last;
    document.getElementById("nombreApellido").innerHTML = nombreApellido;
    document.getElementById("celular").innerHTML = datos.cell;
    document.getElementById("telefono").innerHTML = datos.phone;
    document.getElementById("mail").innerHTML = datos.email;
    let direccion = datos.location.street.name + " " + datos.location.street.number + ", " + datos.location.city + " - " + datos.location.state + ", " + datos.location.country;
    document.getElementById("direccion").innerHTML = direccion;
}

const coleccionItem = document.getElementsByClassName("lineadeltiempo-item");
const coleccionBotonIcono = document.getElementsByClassName("lineadeltiempo-item-botton-icono");

for (let i = 0; i < coleccionItem.length; i++) {
    let exp1 = coleccionItem[i];
    let botonExp1 = coleccionBotonIcono[i];
    console.log(exp1);
    exp1.addEventListener('click', () => cambioIcono(botonExp1));
}


function cambioIcono(botonExp) {
    if (botonExp.ariaExpanded === "false") {
        botonExp.className = "fa-solid fa-chevron-down fa-xl collapsed"
    } else {
        botonExp.className = "fa-solid fa-chevron-up fa-xl"
    }
}
