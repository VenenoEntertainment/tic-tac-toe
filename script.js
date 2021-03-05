var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id){
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador === 'X'){
        jogador = 'O';
    }else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var q1 = document.getElementById(1);
    var q2 = document.getElementById(2);
    var q3 = document.getElementById(3);
    var q4 = document.getElementById(4);
    var q5 = document.getElementById(5);
    var q6 = document.getElementById(6);
    var q7 = document.getElementById(7);
    var q8 = document.getElementById(8);
    var q9 = document.getElementById(9);
    if(checaSequencia(q1,q2,q3)){
        mudarQuadrado(q1,q2,q3);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q4,q5,q6)){
        mudarQuadrado(q4,q5,q6);
        mudarVencedor(q4);
        return;
    }
    if(checaSequencia(q7,q8,q9)){
        mudarQuadrado(q7,q8,q9);
        mudarVencedor(q7);
        return;
    }
    if(checaSequencia(q1,q4,q7)){
        mudarQuadrado(q1,q4,q7);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q2,q5,q8)){
        mudarQuadrado(q2,q5,q8);
        mudarVencedor(q2);
        return;
    }
    if(checaSequencia(q3,q6,q9)){
        mudarQuadrado(q3,q6,q9);
        mudarVencedor(q3);
        return;
    }
    if(checaSequencia(q1,q5,q9)){
        mudarQuadrado(q1,q5,q9);
        mudarVencedor(q1);
        return;
    }
    if(checaSequencia(q3,q5,q7)){
        mudarQuadrado(q3,q5,q7);
        mudarVencedor(q3);
        return;
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.color = "darkgreen";
    quadrado2.style.color = "darkgreen";
    quadrado3.style.color = "darkgreen";
    quadrado1.style.background = "#0f0";
    quadrado2.style.background = "#0f0";
    quadrado3.style.background = "#0f0";

}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;
    
    if(quadrado1.innerHTML != '-' && (quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML)){
        igual = true;
    }
    return igual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}