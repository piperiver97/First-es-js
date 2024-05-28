/*
Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga "hello javascript".
*/

//texto
// renderizan un h1 en navegador(que se reproduzca en pantalla)

//dado que me encuentro en la pagina html
//cuando se renderiza
//entonces veo el titulo Hello Javascript

const hello = 'Hello Javascript'
const divApp = document.querySelector('#app')
console.log(divApp);
function renderTitle(title){
    divApp.innerHTML = /* html */ 
    `<h1>${title}</h1>`
}
renderTitle(hello)