let caixa = document.querySelector('.caixa')
let pesquisa = document.getElementById('pesquisa')

function pag_jogador(){
    for (let i=0;1 <= jogadores.length;i++){
        caixa.innerHTML += `
        <div class= "cardJogador">
            <img class="img_cardJogador" src="${jogadores[i]["imagem"]}">
            <p id="nome">${jogadores[i]["nome"]}</p>
            <h2>${jogadores[i]["posicao"]}</h2>
            <button class="btn first" onclick='save_Cookie(${JSON.stringify(jogadores[i])})'>Mais informações</button> 
        </div>
        `
    }
}

window.onload = () => {
    pag_jogador()
}

function pesquisar(){
    const pesquisa = document.getElementById('pesquisa-jogador').value.toLowerCase()
    const card = document.getElementsByClassName('cardJogador')

    for(let i=0; i<card.length; i++){
        let name = card[i].querySelector(".cardJogador #nome")

        if(name.innerText.toLowerCase().indexOf(pesquisa) > -1){
            card[i].style.display = ""
        }else{
            card[i].style.display = "none"
        }
    }
}

function save_Cookie(jogador){
    document.cookie = jogador['nome'] + "$";
    document.cookie += jogador['posicao'] + "$";
    document.cookie += jogador['imagem'] + "$";
    document.cookie += jogador['nome_completo'] + "$";
    document.cookie += jogador['nascimento'] + "$";
    document.cookie += jogador['altura_peso'] + "$";

    window.location.href = './pagina_jogador/card.html'

    document.cookie = ''
}