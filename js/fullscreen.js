
document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelectorAll('.imagen');

    img.forEach(img => {
        img.addEventListener('click', function() {
            if (img.classList.contains('fullscreen')) {
                img.classList.remove('fullscreen');
            } else {
                img.classList.add('fullscreen');
            }
        });
    });
});
