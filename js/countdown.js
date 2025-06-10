function startCountdown() {
    const targetTime = new Date();
    targetTime.setHours(22, 0, 0, 0); 
    function updateCountdown() {
        const now = new Date();
        let timeLeft = targetTime - now;

        if (timeLeft < 0) {
            targetTime.setDate(targetTime.getDate() + 1);
            timeLeft = targetTime - now;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerText =
            `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); 
}

startCountdown();