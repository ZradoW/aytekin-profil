document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.getElementById('music-toggle');
    const backgroundAudio = new Audio('arka_plan_muzik.mp3'); 
    backgroundAudio.loop = true;

    musicButton.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play().catch(error => {
                console.error("Müzik çalma hatası:", error);
                alert("Müzik başlatılamadı. Tarayıcı ayarlarınızı kontrol edin.");
            });
            musicButton.textContent = '🔊 Müzik: Açık';
            musicButton.classList.add('playing');
        } else {
            backgroundAudio.pause();
            musicButton.textContent = '🔇 Müzik: Kapalı';
            musicButton.classList.remove('playing');
        }
    });

    musicButton.textContent = '🔇 Müzik: Kapalı';
});