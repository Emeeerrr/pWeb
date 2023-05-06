let NombreProducto="Autos de lujo";
let Precio="$999.99";
let Descripcion="Lorem ipsum dolor sit amet consectetur";
let Foto="fotos/carro1.jpg";
// let Foto2=""
// let Foto3=""
// let Foto4=""

const ficha=`<section class="container">
<div class="Descripcion">
    <h1>${NombreProducto}</h2>
    <h2>${Precio}</h3>
    <p>${Descripcion}</p>
</div>
<div class="Fotos">
    <figure class="Foto-1"><img src="${Foto}" alt="Fotografia 1"></figure>
    <figure class="Foto-2"><img src="${Foto}" alt="Fotografia 2"></figure>
    <figure class="Foto-3"><img src="${Foto}" alt="Fotografia 3"></figure>
    <figure class="Foto-4"><img src="${Foto}" alt="Fotografia 4"></figure>
</div>
<div class="pieproducto">
    <div class="Estado">
        <i class='bx bx-star bx-md'></i>
        <i class='bx bx-star bx-md'></i>
        <i class='bx bx-star bx-md'></i>
        <i class='bx bx-star bx-md'></i>
        <i class='bx bx-star bx-md'></i>
    </div>
    <div class="Social">
        <i class='bx bxs-share-alt bx-md' ></i>
    </div>
    <div class="Carro">
        <i class='bx bx-cart-add bx-md'></i>
    </div>
</div>
</section>`;


// function verFicha(){
//     const f1=document.getElementById("contenido");
//     f1.innerHTML=ficha;
// }

// verFicha();

function dibujarFicha(){
    const f1=document.getElementById("contenido");
    let newFicha=document.createElement("span");
    newFicha.innerHTML=ficha;
    f1.appendChild(newFicha);
}

for (i = 0; i < 6; i++) {
    dibujarFicha();
}