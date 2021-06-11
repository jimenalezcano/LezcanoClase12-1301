
//Creo evento en input "DNI" para que solo pueda poner numeros
$("#dni").keypress(function (event) {
   console.log(event.keypress);
   if (!(event.keyCode >= 48 && event.keyCode <= 57)) event.preventDefault();
});

//Creo evento en input "pago" para que el usuario solo puede poner letras 
$("#pago").keypress(function (event) {
   console.log(event.keypress);
   if (event.keyCode >= 48 && event.keyCode <= 57) event.preventDefault();
});
