window.onload = () => {
    mostraCard()
}

function mostraCard(){
    let info = document.querySelector('.cardInfo')

    let jogador = document.cookie.split('$') 

    console.log(jogador)

    info.innerHTML = `
        <h1>${jogador[3]}</h1>
        <img class="img_cardJogador" src='${jogador[2]}'>
        <h2>${jogador[4]}</h2>
        <h2>${jogador[5]}</h2>
        <button class="btn first" onclick="voltar()">Voltar</button>
    `
}

function voltar(){
    document.cookie = ''

    window.location.href = '../../';
}