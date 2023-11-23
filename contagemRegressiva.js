

function contagemRegressiva() {

// Pegando a data atual
let agora = new Date();

// Pegando a data do fim do ano
let fimDoAno2023 = new Date(2023, 11, 31, 23, 59, 59)

// Vendo a diferença em milissegundos
let diferencaEmMilissegundos = fimDoAno2023 - agora;


// Convertendo em dias, horas e minutos
let dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
let horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
let minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 *60)) / (1000 * 60));
let segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

// Agora a mágica acontece
document.getElementById("dia").innerHTML = `<ion-icon name="calendar-outline"></ion-icon> ${dias} dias`;

document.getElementById("horas").innerHTML = ` <ion-icon name="time-outline"></ion-icon> ${horas} : ${minutos} : ${segundos}`;

}

contagemRegressiva()

setInterval(contagemRegressiva, 1000);

