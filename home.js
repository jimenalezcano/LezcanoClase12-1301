// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


//Creo constructor para objeto usuario
class User {
    constructor(nombre, apellido, nombreUser, contrasena, documento, email, barrio, direccion, pago) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUser = nombreUser;
        this.contrasena = contrasena;
        this.documento = documento;
        this.email = email;
        this.barrio = barrio;
        this.direccion = direccion;
        this.pago = pago;

    }
};


//Creo funcion para cargar datos de Usuario en el LocalStorage
function registrarUser() {
    let nombre = $("#nombres").val();
    let apellido = $("#apellido").val();
    let nombreUser = $("#nombreUser").val();
    let contrasena = $("contrasena").val();
    let documento = $("#dni").val();
    let email = $("#email").val();
    let barrio = $("#barrio").val();
    let direcion = $("#direccion").val();
    let pago = $("#pago").val();
    console.log(nombres, apellido);
    const nuevoUser = new User(nombre, apellido, nombreUser, documento, contrasena, email, direccion, barrio, pago)

    var etiquetasDom = [];

    etiquetasDom.push(nuevoUser);

    document.querySelector("#datosDom").innerHTML =

        `<p> Bienvenido a FarmaWeb ${nuevoUser.nombre} ${nuevoUser.apellido} ,su usuario ${nuevoUser.nombreUser} se registro con exito!</p>`;

    var regUser = JSON.stringify(nuevoUser);
    localStorage.setItem("Usuario", regUser);
    console.log("Se guardo el cliente en LocalStorage")
    console.log("Se registraron los siguientes datos del cliente  " + nuevoUser.nombre + nuevoUser.apellido + nuevoUser.nombreUser)

}

//llamada get para usuario.json
$(document).ready(function () {

    $.getJSON("usuarios.json", function (data) {
        var items = [];

        $.each(data, function (index, element) {
            let lista = `<li id='${index}-id'>" ${element.nombre} "</li>
                         <li id='${index}-title'>" ${element.apellido} "</li>
                         <li id='${index}-completed'>" ${element.nombreUser} "</li>
                         <li>----------------</li>`;

            items.push(lista);
        });

        let Usuario = {
            class: "my-new-list",
            html: items,
            id: "mylista",
            tittle: "mi lista de usuarios",
        };

        $("<ul/>", Usuario).appendTo("body");
    });
});

