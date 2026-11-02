const images = document.getElementById('carouselImages');
const totalImages = images.children.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

/* ==========================
   Lógica da Imagem em Tela Cheia (Modal)
========================== */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const closeModal = document.querySelector(".close-modal");
const imageContainers = document.querySelectorAll(".image-container");

// Abre o modal ao clicar em qualquer imagem de projeto
imageContainers.forEach(container => {
    container.addEventListener('click', function() {
        const img = this.querySelector('img');
        modal.classList.add('show');
        modalImg.src = img.src; // Pega o endereço da imagem clicada
        document.body.style.overflow = 'hidden'; // Evita que a página role no fundo
    });
});

// Fecha o modal ao clicar no botão 'X'
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Devolve o scroll da página
});

// Fecha o modal se clicar fora da imagem (no fundo escuro)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});