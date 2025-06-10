const startDate = new Date("2023-03-26T00:00:00");

function updateCounter() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const hours = now.getHours() - startDate.getHours();
    const minutes = now.getMinutes() - startDate.getMinutes();
    const seconds = now.getSeconds() - startDate.getSeconds();

    document.getElementById('loveCounter').innerText =
        `Te amando há ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}