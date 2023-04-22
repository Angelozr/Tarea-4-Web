function calcular() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var division = num1 / num2;
  var porcentaje = (num1 + num2) / 100
  alert("la suma es: " + suma)
  alert("la resta es: " + resta)
  alert("la multiplicacion es: " + multiplicacion)
  alert("la division es: " + division)
  alert("el  porcentaje es: " + porcentaje)
}