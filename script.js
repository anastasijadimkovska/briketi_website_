
function openLightbox(src) {
    let lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${src}" class="lightbox-img">`;
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightbox.firstChild) {
            lightbox.remove();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            lightbox.remove();
        }
    }, { once: true });
}
