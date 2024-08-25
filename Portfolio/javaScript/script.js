window.addEventListener("scroll", function(){
    let header = document.querySelector('#header-bonito')
    header.classList.toggle('rolagem',window.scrollY > 0)
})
