const title = document.getElementById("title");
const story = document.getElementById("story");
const choices = document.getElementById("choices");


// COMEÇAR O JOGO
function startGame() {

    title.textContent = "🚀 A Nave Alienígena";

    story.textContent =
        "Uma nave alienígena acaba de cair no Oceano Atlântico. " +
        "O impacto espalhou uma substância misteriosa pela água. " +
        "Peixes estão morrendo e a contaminação está aumentando rapidamente.";

    choices.innerHTML = `
        <button onclick="investigateShip()">
            🚀 Investigar a nave
        </button>

        <button onclick="cleanOcean()">
            🧹 Começar a limpar o oceano
        </button>

        <button onclick="saveAnimals()">
            🐢 Procurar animais em perigo
        </button>
    `;
}


// CAMINHO 1
function investigateShip() {

    title.textContent = "🚀 Dentro da Nave";

    story.textContent =
        "Você entra na nave e encontra um alienígena. " +
        "Ele afirma que não veio destruir a Terra. " +
        "Segundo ele, a substância era um produto criado para limpar oceanos.";

    choices.innerHTML = `
        <button onclick="trustAlien()">
            👽 Confiar no alienígena
        </button>

        <button onclick="turnOffShip()">
            ⚡ Desligar a nave
        </button>
    `;
}


// CONFIAR NO ALIENÍGENA
function trustAlien() {

    title.textContent = "👽 O Reator de Purificação";

    story.textContent =
        "O alienígena revela que a nave possui um reator capaz de " +
        "purificar o oceano. Porém, ele precisa de uma fonte de energia.";

    choices.innerHTML = `
        <button onclick="powerCrystal()">
            🔴 Procurar uma fonte de energia
        </button>

        <button onclick="turnOffShip()">
            ⚡ Desligar a nave
        </button>
    `;
}


// DESLIGAR A NAVE
function turnOffShip() {

    title.textContent = "⚡ A Nave Foi Desligada";

    story.textContent =
        "Você consegue desligar a nave. A contaminação para de aumentar, " +
        "mas a substância que já está no oceano continua espalhada.";

    choices.innerHTML = `
        <button onclick="cleanOcean()">
            🧹 Começar a limpar o oceano
        </button>
    `;
}


// CAMINHO 2
function cleanOcean() {

    title.textContent = "🧹 A Limpeza Começou";

    story.textContent =
        "Os Guardiões começam a retirar a substância contaminante. " +
        "Porém, vocês percebem que a contaminação é muito maior do que imaginavam.";

    choices.innerHTML = `
        <button onclick="askForHelp()">
            🌎 Pedir ajuda para outros países
        </button>

        <button onclick="investigateShip()">
            🚀 Procurar tecnologia dentro da nave
        </button>
    `;
}


// PEDIR AJUDA
function askForHelp() {

    title.textContent = "🌎 Ajuda Internacional";

    story.textContent =
        "Países de todo o mundo enviam navios, drones e equipamentos. " +
        "Mesmo assim, a contaminação continua avançando.";

    choices.innerHTML = `
        <button onclick="investigateShip()">
            🚀 Investigar a nave
        </button>
    `;
}


// CAMINHO 3
function saveAnimals() {

    title.textContent = "🐢 Animais em Perigo";

    story.textContent =
        "Você encontra tartarugas, golfinhos e peixes afetados pela substância. " +
        "Durante o resgate, uma tartaruga nada para uma região desconhecida.";

    choices.innerHTML = `
        <button onclick="followTurtle()">
            🐢 Seguir a tartaruga
        </button>

        <button onclick="cleanOcean()">
            🧹 Continuar limpando o oceano
        </button>
    `;
}


// CIDADE SUBMERSA
function followTurtle() {

    title.textContent = "🏛️ A Cidade Submersa";

    story.textContent =
        "Você segue a tartaruga e encontra uma antiga cidade submersa. " +
        "No centro existe uma estrutura brilhante que pode conter energia suficiente " +
        "para ativar o reator da nave.";

    choices.innerHTML = `
        <button onclick="powerCrystal()">
            🔴 Pegar o cristal de energia
        </button>

        <button onclick="lifeDevice()">
            🟢 Procurar um dispositivo de restauração
        </button>

        <button onclick="controlRoom()">
            🔵 Investigar a sala de controle
        </button>
    `;
}


// CRISTAL
function powerCrystal() {

    title.textContent = "🔴 O Cristal de Energia";

    story.textContent =
        "Você encontra um enorme cristal energético. " +
        "Ele pode alimentar o reator de purificação da nave.";

    choices.innerHTML = `
        <button onclick="goodEnding()">
            ⚡ Ativar o reator
        </button>
    `;
}


// DISPOSITIVO DE VIDA
function lifeDevice() {

    title.textContent = "🟢 O Dispositivo de Vida";

    story.textContent =
        "Você encontra um dispositivo capaz de restaurar os ecossistemas marinhos. " +
        "Ao ativá-lo, os corais começam a crescer novamente.";

    choices.innerHTML = `
        <button onclick="endingTwo()">
            🌱 Restaurar o oceano
        </button>
    `;
}


// SALA DE CONTROLE
function controlRoom() {

    title.textContent = "🔵 A Verdade";

    story.textContent =
        "Você descobre que os alienígenas vieram à Terra porque perceberam " +
        "que os humanos estavam destruindo os próprios oceanos.";

    choices.innerHTML = `
        <button onclick="alienEnding()">
            👽 Fazer uma aliança
        </button>

        <button onclick="battleEnding()">
            ⚔️ Expulsar os alienígenas
        </button>
    `;
}


// FINAL 1
function goodEnding() {

    title.textContent = "🌊 FINAL 1 — O OCEANO RENASCE";

    story.textContent =
        "O reator é ativado. Uma onda de energia percorre o oceano. " +
        "A água fica limpa, os peixes retornam e os animais são salvos. " +
        "Você se tornou um verdadeiro Guardião do Oceano.";

    choices.innerHTML = `
        <button onclick="location.reload()">
            🔄 Jogar novamente
        </button>
    `;
}


// FINAL 2
function endingTwo() {

    title.textContent = "🌱 FINAL 2 — UM NOVO COMEÇO";

    story.textContent =
        "Os ecossistemas começam a se recuperar. " +
        "Porém, a nave ainda representa uma ameaça. " +
        "O oceano foi salvo parcialmente, mas a missão ainda não terminou.";

    choices.innerHTML = `
        <button onclick="location.reload()">
            🔄 Jogar novamente
        </button>
    `;
}


// FINAL 3
function alienEnding() {

    title.textContent = "👽 FINAL 3 — ALIANÇA GALÁCTICA";

    story.textContent =
        "Você aceita a ajuda dos alienígenas. " +
        "Juntos, vocês ativam o sistema de purificação. " +
        "O oceano é completamente recuperado.";

    choices.innerHTML = `
        <button onclick="location.reload()">
            🔄 Jogar novamente
        </button>
    `;
}


// FINAL 4
function battleEnding() {

    title.textContent = "💥 FINAL 4 — VITÓRIA COM SACRIFÍCIO";

    story.textContent =
        "Você decide expulsar os alienígenas. " +
        "Depois de uma grande batalha, a nave é destruída. " +
        "A contaminação para, mas ainda será necessário limpar o oceano.";

    choices.innerHTML = `
        <button onclick="location.reload()">
            🔄 Jogar novamente
        </button>
    `;
}