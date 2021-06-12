$(document).ready(function () {
    $('#birth-date').mask('00/00/0000');
    $('#phone-number').mask('0000-0000');
})



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
