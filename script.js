<script>
// ==========================
// 1. QUIZ INTERATIVO
// ==========================
function mostrarResposta() {
    const resultado = document.getElementById("resultado");

    const mensagens = [
        "Sim! Tecnologia e sustentabilidade podem trabalhar juntas para preservar o planeta.",
        "Com certeza! Inovação no campo reduz impactos ambientais.",
        "Sim, a agricultura do futuro depende da tecnologia sustentável."
    ];

    const respostaAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    resultado.innerHTML = respostaAleatoria;
}


// ==========================
// 2. FORMULÁRIO - VALIDAÇÃO E ENVIO SIMULADO
// ==========================
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    if (!nome || !email) {
        alert("Por favor, preencha nome e e-mail.");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso.`);

    form.reset();
});


// ==========================
// 3. NAVEGAÇÃO SUAVE
// ==========================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


// ==========================
// 4. ANIMAÇÃO SIMPLES NOS CARDS
// ==========================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});


// ==========================
// 5. EFEITO NO BOTÃO DO BANNER
// ==========================
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.innerText = "Explorando...";
    setTimeout(() => {
        btn.innerText = "Saiba mais";
    }, 1500);
});
</script>
