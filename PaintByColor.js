let contenitore = document.querySelector(".contenitore")
let coloreSelezionato = ""
let coloriSample = ["brown", "red", "orange", "yellow", "greenyellow", "green", "cyan", "blue", "purple", "pink", "white"]
let colorPalette = document.querySelector(".colorPalette")
let baseCelle = 20

let numeroCelle = document.querySelector("#numeroCelle")
let reset = document.querySelector("#resetta")


for (let x = 0; x < coloriSample.length; x++) {
    let sample = document.createElement("div")
    colorPalette.appendChild(sample)
    sample.classList.add('colore')
    sample.id = coloriSample[x]
    sample.style.backgroundColor = coloriSample[x]
    sample.onclick = function() {
        coloreSelezionato = sample.id
        colori.forEach(element => {
            element.style.border = "4px double black"
        })
        sample.style.border = "4px solid black"
        }
    
}

let colori = document.querySelectorAll(".colore")

function creaGriglia() {
for (let x = 0; x < baseCelle; x++) {
    let riga = document.createElement("div")
    contenitore.appendChild(riga)
    riga.classList.add('riga')

    for (let i= 0; i < baseCelle; i++) {
        let cella = document.createElement("div")
        riga.appendChild(cella)
        cella.classList.add('cella')
        cella.onmousedown = function() {
            cella.style.backgroundColor = coloreSelezionato
            console.log("primo", coloreSelezionato)
        }
    }
}
}
creaGriglia()

numeroCelle.onchange = function() {
    if (numeroCelle.value > 100) {
        numeroCelle.value = 100
    }
    baseCelle = numeroCelle.value
    contenitore.innerHTML = ''
    creaGriglia()
}

reset.onclick = function() {
    contenitore.innerHTML= ''
    creaGriglia()
}








