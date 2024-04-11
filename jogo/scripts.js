const MAX_TENTATIVAS = 10;
let tentativasRestantes = MAX_TENTATIVAS;
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
    if (tentativasRestantes > 0) {
        const valorInput0 = parseInt(document.getElementById("number").value);
        const valorInput1 = parseInt(document.getElementById("number-01").value);
        const valorInput2 = parseInt(document.getElementById("number-02").value);
        const valorInput3 = parseInt(document.getElementById("number-03").value);

        const tentativa = [valorInput0, valorInput1, valorInput2, valorInput3];

        verificarTentativa(tentativa);
        atualizarHistorico();
        tentativasRestantes--;

        if (tentativa.join('') === sequenciaGerada.join('')) {
            alert("Parabéns! Você acertou a sequência!");
        }
    } else {
        alert("Você atingiu o limite de tentativas!");
    }
}


function verificarTentativa(tentativa) {
    const resultado = [];

    for (let i = 0; i < 4; i++) {
        if (tentativa[i] === sequenciaGerada[i]) {
            resultado.push("correto");
        } else if (sequenciaGerada.includes(tentativa[i])) {
            resultado.push("incorreto");
        } else {
            resultado.push("ausente");
        }
    }

    historicoSequenciasUsuario.push([...tentativa, resultado]);
}

function atualizarHistorico() {
    const historicoElement = document.getElementById("historico");
    historicoElement.innerHTML = "";

    historicoSequenciasUsuario.forEach((tentativa, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}º:`;

        for (let i = 0; i < 4; i++) {
            const span = document.createElement("span");
            span.textContent = `${tentativa[i]}`;
            li.appendChild(span);

            switch (tentativa[4][i]) {
                case "correto":
                    span.style.backgroundColor = 'green';
                    break;
                case "incorreto":
                    span.style.backgroundColor = 'yellow';
                    break;
                case "ausente":
                    span.style.backgroundColor = 'gray';
                    break;
            }
        }
        historicoElement.appendChild(li);
    });
}


