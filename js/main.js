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

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); // no hagas lo que haces por defwcto
    console.log("botón btnModificar presionado");
    
});