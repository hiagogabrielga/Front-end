function showMenu(){
    let menuMobile = document.querySelector('.navBarHeaderMobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}