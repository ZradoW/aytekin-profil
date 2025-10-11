document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.getElementById('music-toggle');
    const backgroundAudio = new Audio('arka_plan_muzik.mp3'); 
    
    // Müzik sürekli döngüde çalacak
    backgroundAudio.loop = true;

    musicButton.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            // Müzik çalmaya başlar
            backgroundAudio.play().catch(error => {
                // Tarayıcı otomatik çalmayı reddederse hata yakalanır
                console.error("Müzik çalma hatası:", error);
                alert("Müzik başlatılamadı. Tarayıcı ayarlarınızı kontrol edin.");
            });
            musicButton.textContent = '🔊 Müzik: Açık';
            musicButton.classList.add('playing');
        } else {
            // Müzik durur
            backgroundAudio.pause();
            musicButton.textContent = '🔇 Müzik: Kapalı';
            musicButton.classList.remove('playing');
        }
    });

    // Sayfa yüklendiğinde varsayılan durum
    musicButton.textContent = '🔇 Müzik: Kapalı';
});