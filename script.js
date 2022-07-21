const boton = document.getElementById("botonTexto")
const texto = document.getElementById("textoCopiar")
const imagen = document.getElementById("imagen")
const input = document.getElementById("input")


boton.addEventListener("click", () => {
    alert("Me clickeaste? Terrible denuncia te comiste mostro")
})

texto.addEventListener("copy", () => {
    alert("Perdon? Me estas copiando? ProfeeEeEe, samu se esta copiando")
})

imagen.addEventListener("drag", () => {
    alert("Te dije un poquito nomas, atrevido!")
})

input.addEventListener("keydown", () => {
    let inputTexto = document.getElementById("inputText")
    inputTexto.innerText = input.value
})