class Viaje {
    constructor (lugar, noches, precio, pasajeros) {
    this.lugar = lugar;
    this.noches = noches;
    this.precio = precio;
    //this.pasajeros = pasajeros
    this.comprado = false;
}

vender (){
    this.comprado = true
}
}

const Viajes = [];

Viaje.push = new Viaje ("Madrid", "7 noches", "2550000");
Viaje.push = new Viaje ("Mendoza", "4 noches", "800000");
Viaje.push = new Viaje ("Ushuaia", "5 noches", "1000000");


 let paises = document.getElementsByClassName("paises");
 console.log(paises[0].innerHTML);
 console.log(paises[1].innerHTML);
 console.log(paises[2].innerHTML);

 /*for (const Viaje of Viajes){
    let nuevo = document.createElement ("div");
    nuevo.innerHTML = ( viaje, h1, p, p);
 }     */ 
 //Esto solo sirve con objetos creados con ID

 let buscar = document.createElement ("search");
 buscar.innerHTML="<h4>Buscar</h4>";
document.body.append(buscar);

document.getElementById("buscar").value=("Buscar");

let imput1 = document.getElementById("Adonde")
let imput2 = document.getElementById("Cuantas")

imput1.onchange = () => {console.log ("Lugar")};
imput2.onchange = () => {console.log ("CantidadPersonas")};

//let Viaje = [
//    {id: 1, lugar: "Madrid", noches: "7 noches", precio : 2550000},
//    {id: 2, lugar: "Mendoza", noches: "4 noches", precio : 800000},
//    {id: 2, lugar: "Ushuaia", noches: "5 noches", precio : 1000000},
//]




//const miArray = ["marca", 3, "palabra"]
//miArray.push("otra cosa") // esto lo agrega al final, si quiero agregar al ppio tengo que poner .unshift

//console.log (miArray.length) //va a ser 4
//console.log (miArray) //va a ser ["marca", 3, "palabra", "otra cosa"]*/