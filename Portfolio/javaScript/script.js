window.addEventListener("scroll", function () {
    let header = document.querySelector('#header-bonito')
    let conteudo = document.querySelector('.conteudo-central')
    header.classList.toggle('rolagem', window.scrollY > 0)
    conteudo.classList.toggle('rolagem', window.scrollY > 100)
})