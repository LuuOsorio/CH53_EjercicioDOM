let btnMostrar = document.getElementById("btnMostrar");



let encabezado1 = document.getElementById("encabezado1");  //trae un elemento
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");  //trae varios elementos y esta viva


let elementos = document.getElementsByClassName("list-group-item");


let otroElemento = document.querySelector("ul>li"); //un elemento

let otrosElementos = document.querySelectorAll("ul>li"); // todos y son 10 //una collecion



console.log("otroElemento: ", otroElemento);

console.log(listas.length);  //2
//console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length); //10

let contador = 0;
function modifica() {

    // encabezado1.innerText = "Ejercicio DOM";
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
    //console.log(encabezado1.innerText);
    //encabezado2.innerText = "DOM exercise";
    encabezado2.innerText = ++contador;
    //console.log(encabezado2.innerText);
}

btnMostrar.addEventListener("click", function (event) {
    event.preventDefault(); // no hagas lo que haces por defwcto
    console.log("botón btnModificar presionado");


    // Accediendo a los elementos de las listas

    let element = document.createElement("li"); //solo necesita como se llama la etiqueta
    element.innerText = "Anoter item"; // <li>Anoter item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true); // se hacen  dos elements

    //before Inserta el elemento antes de la lista
    // listas.item(0).before(element);
    //prepend Inserta el elemento al principio de la lista
    // listas.item(0).prepend(element2);
    //append Inserta el elemento al final de la lista
    //listas.item(0).append(element);
    //after Inserta el elemento después de la lista
    //listas.item(0).after(element2);


    //     //afterbegin Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("afterbegin", element);
    // //beforeend Inserta el elemento al final de la lista
    // listas.item(1).insertAdjacentElement("beforeend", element2);

    //hay que clonar más elementos, para poder ver todos de lo contrario continua haciendo las propiedades finales
    
    
    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`);

    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">After End item</li>`);

    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">After Begin Item</li>`);

    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`);

});