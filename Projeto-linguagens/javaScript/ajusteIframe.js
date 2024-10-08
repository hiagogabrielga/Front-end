function adjustIframeHeight() {
    var iframe = document.getElementById('myIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

// Ajusta a altura quando o iframe terminar de carregar
document.getElementById('myIframe').onload = function () {
    adjustIframeHeight();
};

// Ajusta a altura também quando o conteúdo interno mudar (se aplicável)
window.addEventListener('resize', adjustIframeHeight);
