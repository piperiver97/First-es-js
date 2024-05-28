// Dado que le usuario se encuentra en la pagina con el formulario
// Cuando rellena el campo de formulario con su nombre y valida haciendo click en el boton validar
// Entonces se renderiza en pantalla el texto "Hola <Nombre de usuario>"

// Click de boto = eveento
// recuperar el nombre del usuario
//renderizar en un contenedor html el texto "hola pepe"


const inputUsername = document.getElementById("username")
const btnValidate = document.getElementById("btn-validate")
const mainBlock = document.querySelector ('main')

btnValidate.addEventListener('click', () =>{
               
    const username = inputUsername.value
    render(username)

})
function render (username){
    mainBlock.innweHTML = /* htmll*/
    <span> Hola ${username} </span>
}