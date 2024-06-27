document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const rtx = document.getElementById('rtx');

    startButton.addEventListener('click', () => {
        backgroundMusic.play();
        rtx.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('banner2').classList.add('show');
        }, 1000);
    });

});

function closeBanner(id) {
    const banner = document.getElementById(id);
    banner.style.display = 'none';
}
