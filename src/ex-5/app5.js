function compararValores(){
const valor1 = parseFloat(document.getElementById("#valor1").value);
const valor2 = parseFloat(document.getElementById("#valor2").value);
let resultado;
if(valor1 > valor2){
    resultado = "El valor 1 (${valor1}) es mayor que el valor (${valor2}).";
}
else if (valor1 < valor2){
    resultado = "El valor 2 (${valor2}) es mayor que el valor (${valor1}).";
}
document.getElementById("resultado").innerText = resultado;
}
document.addEventListener("DOMContentLoaded", function()) {
    
    document.getElementById('formulario').addEventListener('submit', compararValores);
     }
