document.addEventListener("DOMContentLoaded", () => {
    const numero1Span = document.getElementById("numero1");
    const numero2Span = document.getElementById("numero2");
    const inputResultado = document.getElementById("result");
    const botaoSubmit = document.getElementById("submit");
    const form = document.getElementById("form-verify");

    let numero1;
    let numero2;

    const randomNumberGenerator = () => {
        numero1 = Math.ceil(Math.random() * (1000 - 100) + 100);
        numero2 = Math.ceil(Math.random() * (1000 - 100) + 100);

        numero1Span.textContent = numero1;
        numero2Span.textContent = numero2;
    };
    window.onload = randomNumberGenerator; /* Gera dois números aleatórios para a verificação toda vez que a página é carregada */

    botaoSubmit.disabled = true;
    inputResultado.addEventListener("input", function () {
        botaoSubmit.disabled = inputResultado.value.trim() === "";
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const userResult = parseInt(inputResultado.value);
        if (userResult === numero1 + numero2) {
            botaoSubmit.textContent = "Parabéns! Você acertou.";
            botaoSubmit.style.backgroundColor = "#d4edda";
            botaoSubmit.style.color = "#155724";
            botaoSubmit.style.border = "1px solid #c3e6cb";
            botaoSubmit.style.cursor = "default";
            botaoSubmit.style.opacity = "80%"
            botaoSubmit.disabled = true;
        } else {
            botaoSubmit.textContent = "Ops! Resposta incorreta.";
            botaoSubmit.style.backgroundColor = "#f8d7da";
            botaoSubmit.style.color = "#721c24";
            botaoSubmit.style.border = "1px solid #f5c6cb";
            botaoSubmit.style.cursor = "default";
            botaoSubmit.style.opacity = "80%"
            botaoSubmit.disabled = true;
        }
    });
});