
let usuario = prompt("Ingrese el usuario");

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
    