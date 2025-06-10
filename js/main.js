function openLetter() {
 // Oculta o botão inicial
 const closedLetter = document.getElementById('closedLetter');
 if (closedLetter) {
     closedLetter.style.display = 'none';
 }

 // Mostra o conteúdo da segunda página
 const hiddenContent = document.getElementById('hidden-content-section');
 if (hiddenContent) {
     hiddenContent.classList.add('show');
 }

 // Oculta o contador regressivo
 const countdown = document.getElementById('countdown');
 if (countdown) {
     countdown.style.display = 'none';
 }

 // Inicia o contador do tempo de relacionamento
 updateCounter();
 setInterval(updateCounter, 1000);
}

// Ajusta o volume inicial da música
const backgroundMusic = document.getElementById('backgroundMusic');
if (backgroundMusic) {
 backgroundMusic.volume = 0.5;
}