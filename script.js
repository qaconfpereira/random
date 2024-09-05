const randomNumberDisplay = document.getElementById('randomNumber');
const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');
let timer;

function getRandomNumber() {
  return Math.floor(Math.random() * 150) + 1;
}

function displayRandomNumber() {
  let totalTime = 5000; // 5 segundos totales
  let intervalTime = 100; // Intervalos rápidos de 100ms

  function showRandomNumbers() {
    randomNumberDisplay.textContent = ('00' + getRandomNumber()).slice(-3);
  }

  // Animación continua cada 100ms por 5 segundos
  timer = setInterval(showRandomNumbers, intervalTime);

  // Detener animación después de 5 segundos y mostrar el número final en rojo
  setTimeout(() => {
    clearInterval(timer);
    let finalNumber = ('00' + getRandomNumber()).slice(-3);
    randomNumberDisplay.textContent = finalNumber;
    randomNumberDisplay.style.color = 'green'; // Cambia a rojo al finalizar
  }, totalTime);
}

generateBtn.addEventListener('click', () => {
  clearTimeout(timer);
  randomNumberDisplay.style.color = 'white'; // Reinicia a blanco antes de empezar
  displayRandomNumber();
});

resetBtn.addEventListener('click', () => {
  clearTimeout(timer);
  randomNumberDisplay.textContent = '000';
  randomNumberDisplay.style.color = 'white'; // Vuelve los números a blanco
});
