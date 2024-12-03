
/*let usuario = prompt("Ingrese el usuario");

console.log(usuario);

const contrasenia = Number (prompt ("Ingrese contraseña"));

console.log(contrasenia);

if (( usuario === 'Roberto' ) && Number(contrasenia === 1928) ) {

    alert('Bienvenido ' + usuario + '!!!!!');
  
  } else if  (( usuario != 'Roberto' ) &&  Number(contrasenia === 1928)) {
  
    alert('Por favor, ingresá un usuario válido');

} else if (( usuario === 'Roberto' ) && Number(contrasenia != 1928)) {
  
        alert('Contraseña incorrecta');

    } else {
            alert('Error, usuario y contraseña inválidas')
        }

//Suscripción

    let suscripcion = false

    while( suscripcion === false) {
        
        suscripcion = confirm("Querés suscribirte a nuestro canal? Tendrás muchos beneficios!");
        if (suscripcion === true) {
            break;
        }
        suscripcion = confirm("Dale porfa");
        if (suscripcion === true) {
            break;    
        }
        suscripcion = confirm("Esta bueno eh");
        if (suscripcion === true) {
            break; 
        }
        suscripcion = confirm("No seas malo/a");

        if (suscripcion === true) {
            break;
        }
    }

    //Convertir dolar a peso o peso a dolar

    function multiplicar(num1, num2) {
        let resultado = num1 * num2
        return resultado
    }
    function dividir(num1, num2) {
        let resultado = num1 / num2
        return resultado
    }
    function convertidor (valorDolar, M, moneda) {
        switch (moneda) {
            case "pesos":
                return multiplicar(valorDolar, M)
                break;
            case "dolares":
                return dividir(M, valorDolar)
                break;
            default:
                return 0;
                break;
        }
    }
    let valorDolar = Number(1001)
    let moneda = prompt('¿A qué moneda quiere convertir? Ingrese "pesos" o "dolares"')
    let M = Number(prompt("Ingrese monto a convertir:"))
    let resultado = convertidor (valorDolar, M, moneda)

    if (moneda === "pesos") {

        alert("Usted tiene " + resultado + " pesos")

    } else if (moneda === "dolares") {
        
        alert("Usted tiene " + resultado + " dolares")
    } else {
        alert("Ingrese moneda válida")
    }
    
    alert = "Viajes hasta tres personas"


//const filtro = Viajes.filter ((el)=> )


class pasajero {
    constructor(NombreYapellido, Edad, DNI) {
        this.NombreYapellido = NombreYapellido;
        this.Edad = Edad;
        this.DNI = DNI;
    }
}

const pasajeros = [];

let cantidad = (3)

 do {
    let NombreYapellido = prompt ("Ingresar nombre y apellido")
    let Edad = prompt ("Ingrese Edad")
    let DNI = prompt ("Ingrese DNI")

    pasajero.push = new pasajero (NombreYapellido, Edad, DNI)
    console.log(pasajero.length)

 } while (pasajero.length !=cantidad);*/


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

//let Viaje = [
//    {id: 1, lugar: "Madrid", noches: "7 noches", precio : 2550000},
//    {id: 2, lugar: "Mendoza", noches: "4 noches", precio : 800000},
//    {id: 2, lugar: "Ushuaia", noches: "5 noches", precio : 1000000},
//]




//const miArray = ["marca", 3, "palabra"]
//miArray.push("otra cosa") // esto lo agrega al final, si quiero agregar al ppio tengo que poner .unshift

//console.log (miArray.length) //va a ser 4
//console.log (miArray) //va a ser ["marca", 3, "palabra", "otra cosa"]*/