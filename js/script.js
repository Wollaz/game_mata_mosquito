
//largura x altura da página
let altura = 0
let largura = 0
let vidas = 1
let tempo = 60
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 750
}

function ajustaCenario() {    
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaCenario()

let cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandom() {

    // remove o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas >= 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v'+ vidas).src ="img/coracao_vazio.png"
            vidas++
        }

    }

    // define as posições em que os mosquitos aparecerão
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    // cria e recupera os elementos html
    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = (`${tamanhoRandom()} ${ladoRandom()}`)
    mosquito.style.left = (`${posicaoX}px`)
    mosquito.style.top = (`${posicaoY}px`)
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
       this.remove()
    }
    document.body.appendChild(mosquito)

}

function tamanhoRandom() {
    // os mosquitos possuem 3 tamanhos diferentes
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoRandom() {
    // os mosquitos aparecem de lados diferentes
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
