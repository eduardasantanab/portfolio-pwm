const historicoSequenciasUsuario = [];
const sequenciaGerada = gerarSequencia();

function gerarSequencia() {
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let numeroAleatorio;

        do {
            numeroAleatorio = Math.floor(Math.random() * 10);
        } while (numeros.includes(numeroAleatorio));

        numeros.push(numeroAleatorio);
    }

    return numeros;
}

function adicionarInputs() {
    const valorInput0 = parseInt(document.getElementById("number").value);
    const valorInput1 = parseInt(document.getElementById("number-01").value);
    const valorInput2 = parseInt(document.getElementById("number-02").value);
    const valorInput3 = parseInt(document.getElementById("number-03").value);

    const tentativa = [valorInput0, valorInput1, valorInput2, valorInput3];

    verificarTentativa(tentativa);
    atualizarHistorico();
}



