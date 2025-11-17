/**
 * Mini proyecto
 *
 * Crear un script de JS que simule un cajero automático :D
 * El cajeros debe poseer las siguientes características y
 * permitir las siguientes operaciones:
 *
 * - Solicitar al usuario una entrada que indique la operación a realizar.
 *   Las posibles operaciones son:
 *      1) Depositar fondos.
 *      2) Retirar fondos.
 *      3) Mostrar balance.
 *      4) Culminar la sesión.
 *
 * - Las opciones "depositar" y "retirar" deben incrementar y reducir respectivamente
 * una variable destinada a almacenar el balance del usuario, el cual debe poder ser
 * visualizado a través de la opción "mostrar".
 *
 * - La opción "culminar la sesión" termina el script.
 *
 * - El programa debe responder correctamente si el usuario ingresa una opción
 * inválida y solicitar un nuevo ingreso de la información.
 *
 * - Utilizar prompt() para capturar entradas; alert() para manejar salidas y
 * console.log para crear el registro del desarrollador.
 *
 * - Opcional (LEYENDAS I):
 * Generar alertas adecuadas en caso de que el usuario intente retirar más de lo
 * que posee en su cuenta.
 *
 * - Opcional (LEYENDAS II):
 * Diseñar pequeños algoritmos que validen si el usuario está
 * introduciendo números y que den una respuesta adecuada en caso de que no lo haga.
 *
 * Fecha tentativa: 16-11-2025
 */

let balance = 0;
let operation;

do {
  operation = prompt(
    "Ingrese una occion:\n" +
      "1-Depositar\n" +
      "2-Retirar\n" +
      "3-Mostrar balance\n" +
      "4-Culminar la sesión\n"
  );

  /*
      version 1 del codigo del cajero automatico con solo if 

    if(operation === "1"){
        let deposit = prompt("Ingrese la cantidad a depositar")
        if(!isNaN(deposit) && deposit > 0){
            balance += parseInt(deposit)
            alert(`El deposito de ${deposit} se realizo excitoxamente!`)

            console.log(`Deposito ${deposit}`)
        } else {
          alert("Ocurrio un erro con el monto que intentas depositar")

          console.log("Erro al depositar")
        }
        
    }else if(operation === "2"){
        let withdraw = prompt("Ingrese la cantidad a retirar")
       if (isNaN(withdraw) || withdraw <= 0){
        alert("Cantidad de retiro invalida.")
       } else if (balance < withdraw) {
        alert("Saldo insuficiente cod.01")
       } else{
        alert("Retiro exitoso")
        balance -= withdraw
        console.log(`Retito ${withdraw}`)
       }
    }else if(operation === "3"){
        alert(`El balance es ${balance}`)
        console.log(`consulta de balance ${balance}`)
        
    }else if(operation === "4"){
        alert("Sesión finalizada")
        console.log("secion finalizada")
        
    }else{
        alert("Opción inválida")
    }
 */

  // version 2 usando switch

  switch (operation) {
    case "1": // opcion de depositar
      let deposit = prompt("Ingrese la cantidad a depositar");
      //verificando los datos ingresados por el usuario
      if (!isNaN(deposit) && deposit > 0) {
        balance += parseInt(deposit);
        alert(`El deposito de ${deposit} se realizo excitoxamente!`);
        console.log(`Deposito ${deposit}`);
      } else {
        alert("Ocurrio un erro con el monto que intentas depositar");
        console.log("Erro al depositar");
      }
      break;

    case "2": //opcion de retirar
      let withdraw = prompt("Ingrese la cantidad a retirar");
      //verificando los datos ingresados por el usuario
      if (isNaN(withdraw) || withdraw <= 0) {
        alert("Cantidad de retiro invalida.");
        //validando fondos en la cuenta
      } else if (balance < withdraw) {
        alert("Saldo insuficiente cod.01");
      } else {
        alert("Retiro exitoso");
        balance -= withdraw;
        console.log(`Retito ${withdraw}`);
      }
      break;

    case "3": //opcion de consultar
      alert(`Balance disponible: ${balance}`);
      console.log(`Consulta ${balance}`);
      break;

    case "4": //opcion de finalizar
      alert("Secion finalizada, vuelva pronto");
      console.log("Secion finalizada");
      break;

    default:
      alert("Opcion invalida, debe selecionar una de las opciones");
  }
} while (operation !== "4");
