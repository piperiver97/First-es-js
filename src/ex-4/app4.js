let btn = document.querySelector("#btn"); /*llamamos al btn con  id*/
btn.onclick = function (){  /*le damos funcionalidad al boton del resultado */
    let num1 = document.querySelector("#num1").value /* Llamamos al Num1 identificado con ID */
    let num2 = document.querySelector("#num2").value 

    let suma = parseFloat(num1) + parseFloat(num2);

    document.querySelector("#resultado").innerHTML
    ="Resultado" + suma;
}