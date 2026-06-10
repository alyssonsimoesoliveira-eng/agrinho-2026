let ambiente = 50;
let economia = 50;
let felicidade = 50;
let ano = 2025;

function atualizarTela(){

    document.getElementById("ano").textContent = ano;

    document.getElementById("ambiente").textContent = ambiente;
    document.getElementById("economia").textContent = economia;
    document.getElementById("felicidade").textContent = felicidade;

    document.getElementById("ambienteBar").value = ambiente;
    document.getElementById("economiaBar").value = economia;
    document.getElementById("felicidadeBar").value = felicidade;

    verificarFim();
}

function escolha(tipo){

    ano++;

    switch(tipo){

        case "solar":
            ambiente += 15;
            economia -= 5;
            felicidade += 5;
            mostrarMensagem("☀️ Uma usina solar foi construída.");
            break;

        case "fabrica":
            economia += 20;
            ambiente -= 15;
            felicidade -= 5;
            mostrarMensagem("🏭 Uma nova fábrica trouxe empregos.");
            break;

        case "arvores":
            ambiente += 20;
            felicidade += 10;
            economia -= 5;
            mostrarMensagem("🌳 Milhares de árvores foram plantadas.");
            break;

        case "transporte":
            ambiente += 10;
            felicidade += 15;
            economia -= 10;
            mostrarMensagem("🚌 O transporte público foi modernizado.");
            break;
    }

    limitarValores();
    atualizarTela();
}

function limitarValores(){

    ambiente = Math.max(0, Math.min(100, ambiente));
    economia = Math.max(0, Math.min(100, economia));
    felicidade = Math.max(0, Math.min(100, felicidade));
}

function mostrarMensagem(texto){
    document.getElementById("mensagem").textContent = texto;
}

function verificarFim(){

    if(ambiente <= 0){
        alert("💀 Game Over! O meio ambiente entrou em colapso.");
        location.reload();
    }

    if(economia <= 0){
        alert("💀 Game Over! A economia entrou em crise.");
        location.reload();
    }

    if(felicidade <= 0){
        alert("💀 Game Over! A população abandonou a cidade.");
        location.reload();
    }

    if(
        ano >= 2050 &&
        ambiente >= 40 &&
        economia >= 40 &&
        felicidade >= 40
    ){
        alert("🏆 Vitória! Você criou uma cidade sustentável até 2050.");
        location.reload();
    }

    if(ano >= 2050){
        alert("😢 Você chegou a 2050, mas não alcançou a sustentabilidade.");
        location.reload();
    }
}

atualizarTela();