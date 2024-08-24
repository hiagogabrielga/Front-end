// Seleciona os elementos necessários
const portfolioLink = document.getElementById('portfolio-link');
const siteFeitoLink = document.getElementById('site-feito-link');
const atividadeFlexLink = document.getElementById('atividade-flex-link');
const slidesContainer = document.querySelector('.slides');

// Função para mostrar o slide específico
function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 25}%)`;
}

// Função para adicionar os eventos
function addEventListeners() {
    portfolioLink.addEventListener('mouseover', onPortfolioLinkMouseOver);
    siteFeitoLink.addEventListener('mouseover', onSiteFeitoLinkMouseOver);
    atividadeFlexLink.addEventListener('mouseover', onAtividadeFlexLinkMouseOver);
    document.querySelector('.div-ancoras').addEventListener('mouseout', onDivAncorasMouseOut);
}

// Função para remover os eventos
function removeEventListeners() {
    portfolioLink.removeEventListener('mouseover', onPortfolioLinkMouseOver);
    siteFeitoLink.removeEventListener('mouseover', onSiteFeitoLinkMouseOver);
    atividadeFlexLink.removeEventListener('mouseover', onAtividadeFlexLinkMouseOver);
    document.querySelector('.div-ancoras').removeEventListener('mouseout', onDivAncorasMouseOut);
}

// Funções de manipulador de eventos para os links
function onPortfolioLinkMouseOver() {
    showSlide(1);
}

function onSiteFeitoLinkMouseOver() {
    showSlide(2);
}

function onAtividadeFlexLinkMouseOver() {
    showSlide(3);
}

function onDivAncorasMouseOut(event) {
    if (!event.relatedTarget || !event.relatedTarget.closest('.div-ancoras')) {
        showSlide(0);
    }
}

// Verifica o tamanho da janela inicialmente
if (window.innerWidth > 900) {
    addEventListeners();
}

// Atualiza os eventos quando a janela é redimensionada
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        addEventListeners();
    } else {
        removeEventListeners();
    }
});


function updateVisibility() {
    if (window.innerWidth > 900) {
        document.querySelector('.slider').style.display = 'block';
        document.querySelector('.slides').style.display = 'flex';
        addEventListeners();
    } else {
        document.querySelector('.slider').style.display = 'none';
        document.querySelector('.slides').style.display = 'none';
        removeEventListeners();
    }
}

// Verifica o tamanho da janela inicialmente e ajusta a visibilidade
updateVisibility();

// Atualiza a visibilidade quando a janela é redimensionada
window.addEventListener('resize', updateVisibility);