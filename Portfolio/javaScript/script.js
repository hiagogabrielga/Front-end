function adjustIframeHeight() {
    var iframe = document.getElementById('myIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

document.getElementById('myIframe').onload = function () {
    adjustIframeHeight();
};

window.addEventListener('resize', adjustIframeHeight);
