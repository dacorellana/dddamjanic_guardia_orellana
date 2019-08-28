var trabajos = [{
    figure: "media/TACO 3.jpeg",
    alt: "Descripción de la imagen",
    title: "TACO",
    about: "Banca de terciado 3mm y amarracables.",
    url: "https://www.instagram.com/p/B1nK5dsA3fV/"
}, {
    figure: "media/RUM 2.JPG",
    alt: "Descripción de la imagen",
    title: "RUM",
    about: "Proyecto con material Timberecco.",
    url: "https://www.instagram.com/p/B1nI9pGAWcW/"
}, {
    figure: "media/UNSTOP 1.jpg",
    alt: "Descripción de la imagen",
    title: "UNSTOP",
    about: "Tens inalámbrico y piezoeléctrico para deportistas imparables.",
    url: "https://www.instagram.com/p/B1nIoSLgBjp/"
}, {
    figure: "media/VIRUTEX2.JPG",
    alt: "Descripción de la imagen",
    title: "Parches VIRUTEX",
    about: "Parches de prelavado rápido, para que las manchas no detengan tu rutina. ",
    url: "https://www.instagram.com/p/B1nJFBoA8aF/"
  }, {
    figure: "media/AGUAU.JPG",
    alt: "Descripción de la imagen",
    title: "AGUAU",
    about: "Recipiente de agua para perros diseñado para la fundación Miradanimal. ",
    url: "https://www.instagram.com/p/B1nKyIhAHjI/"
}, {
    figure: "media/canvas.jpg",
    alt: "Descripción de la imagen",
    title: "CANVAS",
    about: "Polera que captura las caídas que convellan la práctica del BMX.",
    url: "https://www.instagram.com/p/B1nIhT-Ajqb/"
}, {
    figure: "media/Fotomontaje Surrealista.png",
    alt: "Descripción de la imagen",
    title: "Fotomontaje Surrealista",
    about: "Trascender lo real a partir del impulso psíquico del estudiante, de lo imaginado e irracional.",
    url: "https://www.instagram.com/p/B1nJ86ZA5ML/"
  }, {
    figure: "media/eternocautiva.png",
    alt: "Descripción de la imagen",
    title: "Eterno Cautiva",
    about: "Creación de logotipo e isótopo para empresa PyME.",
    url: "https://www.instagram.com/p/B1nKz45gI10/"
}, {
    figure: "media/soportecelular.png",
    alt: "Descripción de la imagen",
    title: "Soporte Celular",
    about: "Fusion 360 en la creación del soporte e impresión de prototipo en Impresoras 3D.",
    url: "https://www.instagram.com/p/B1nKklXgxEA/"
}, {
    figure: "media/dibujotecnico.png",
    alt: "Descripción de la imagen",
    title: "Dibujo Técnico ISO-E",
    about: "Líneas normalizadas, continuas y segmento, una isometría del mismo objeto, sin corte. Formato A-3.",
    url: "https://www.instagram.com/p/B1nKwHNgztk"
}, {
    figure: "media/IECAM.png",
    alt: "Descripción de la imagen",
    title: "Logotipo Empresa PyME Certificadora de Ascensores",
    about: "Imagen Corporativa para dicha empresa.",
    url: "https://www.instagram.com/p/B1nK66IA5Z_/"
    }, {
    figure: "media/huertosur.PNG",
    alt: "Descripción de la imagen",
    title: "Huerto Sur Accesible",
    about: "Rediseño del café Huerto Sur para hacerlo  un espacio inclusivo. ",
    url: "https://www.instagram.com/p/B1nLioogbJu/"
      }, {
    figure: "media/CARBRO.JPG",
    alt: "Descripción de la imagen",
    title: "CARBRO ",
    about: "Producto para entrenar la memoria muscular del equilibrio utilizado en deportes como el surf y el surfskate.",
    url: "https://www.instagram.com/p/B1nL9UVgoBr/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + ' ">Ver más...</a></p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
