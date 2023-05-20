const datosproductos = [
    {
        nombre: "Nike Air Force 1",
        descripcion: "Nike Air Force 1, Nunca fallan",
        precio: 97,
        imagen: "imagenes/tenis1.jpg",

    },
    {
        nombre: "Nike Air Max 97",
        descripcion: "Tampoco fallán",
        precio: 119,
        imagen: "imagenes/tenis3.jpg",

    },
    {
        nombre: "Nike Zoom",
        descripcion: "Perfectos si trotas",
        precio: 56,
        imagen: "imagenes/tenis7.jpg",

    },
    {
        nombre: "Nike AF1",
        descripcion: "Los primeros pero de otro color",
        precio: 97,
        imagen: "imagenes/tenis5.jpg",

    },





];

//const f1 = "";
//const p1 = "" = document.getElementById("app").innerHTML 
//= `<h1>esto es un texto de y una operacion {13+5}</h1>`;

const ficha1 = `
<article class="card">
<h3>${datosproductos.nombre}</h3>
<img src="${datosproductos.imagen}" alt="">
<p>${datosproductos.descripcion}</p>
<p>${datosproductos.precio}</p>


<a href="" class="cta">Comprar</a>
</article>`;

function plantilla(datosproductos) {
    return  `
<article class="card">
<h3>${datosproductos.nombre}</h3>
<img src="${datosproductos.imagen}" alt="Tenis">
<p>${datosproductos.descripcion}</p>
<p>${datosproductos.precio}</p>


<a href="" class="cta">Comprar</a>
</article>`;
    
    
    
}





const p2 =document.getElementById("app").innerHTML = 
`<h1> Productos Disponibles  ${datosproductos.length}</h1>
${datosproductos.map(plantilla).join("")}<p class="presio">son: ${datosproductos.length}
productos que se han actualizados en el catalogo.</p>
<p class="cantidad">verificar las actualizaciones periodicamente !!!</p>
<br>`;

