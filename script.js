$(document).ready(function () {

    function cargarUsuario() {
        $.getJSON("https://randomuser.me/api/", function (data) {
            let item = data.results[0];

            let nombre = item.name.first + " " + item.name.last;
            let imagen = item.picture.large;
            let ciudad = item.location.city;
            let pais = item.location.country;

            let comentarios = [
                "Taxease me ha ahorrado horas de trabajo cada semana.",
                "La mejor herramienta que he usado para facturación.",
                "Sencillo, rápido y muy potente.",
                "No sé cómo trabajaba antes sin esto."
            ];

            let comentarioRandom = comentarios[Math.floor(Math.random() * comentarios.length)];

            $(".comentario").text(`"${comentarioRandom}"`);
            $(".usuario").text(nombre);
            $(".ubicacion").text(ciudad + ", " + pais);
            $(".testimonio img").attr("src", imagen);
        });
    }

    cargarUsuario();

});