const sequencia = gerarSequencia();
const meuJogo = adicionarInputs(sequencia);

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

function adicionarInputs(sequencia) {
    const valorInput0 = document.getElementById("number").value;
    const valorInput1 = document.getElementById("number-01").value;
    const valorInput2 = document.getElementById("number-02").value;
    const valorInput3 = document.getElementById("number-03").value;

    meuArray.push(valorInput0, valorInput1, valorInput2, valorInput3);

    jogar();
}


function jogar() {

}

