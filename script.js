// 1. Carga y Sonido
setTimeout(() => {
  document.getElementById('loading-screen').classList.add('hidden');
  document.getElementById('profile-screen').classList.remove('hidden');
}, 2500);

function showHome() {
  document.getElementById('tudum').play();
  document.getElementById('profile-screen').classList.add('hidden');
  document.getElementById('home-screen').classList.remove('hidden');
  startSlider();
}

function startSlider() {
  let slides = document.querySelectorAll('.slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// 2. Planes y Menús
function openPlan(tipo) {
  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('plan-title');
  const desc = document.getElementById('plan-desc');
  const info = document.getElementById('plan-info');
  const interactive = document.getElementById('interactive-section');
  
  modal.classList.remove('hidden');
  interactive.innerHTML = "";

  if(tipo === 'completo') {
    title.innerText = "Cachagua: Día de Película";
    info.innerText = "98% de coincidencia | 2024 | 24h";
    desc.innerText = "Escape a Cachagua y Las Cuchas. Sol, caminatas y el mejor ambiente. ¿Cómo almorzamos?";
    interactive.innerHTML = `
      <div class="column-layout">
        <button class="options-btn" onclick="showRestaurants()">🍴 Ver Restaurantes</button>
        <button class="options-btn" onclick="confirmar('Picnic en Las Cuchas')">🧺 Picnic Preparado</button>
      </div>`;
  } else if(tipo === 'manana') {
    title.innerText = "Matiné: Desayuno Relax";
    info.innerText = "Familiar | 4 Horas | Mañana";
    desc.innerText = "Comenzar el día con un café increíble y paseo por Concón. ¿A dónde vamos?";
    interactive.innerHTML = `
      <div class="column-layout">
        <button class="options-btn" onclick="showBreakfasts()">☕ Ver Opciones</button>
        <button class="options-btn" onclick="confirmar('Paseo Mañanero')">🌊 Solo Paseo</button>
      </div>`;
  } else if(tipo === 'tarde') {
    title.innerText = "Especial: Sunset & Chill";
    info.innerText = "Romance | 6 Horas | Golden Hour";
    desc.innerText = "Piscina, helados y empanaditas para cerrar el día con el sunset en casa.";
    interactive.innerHTML = `<button class="options-btn" onclick="confirmar('Sunset en Concón')">🌅 Confirmar Tarde</button>`;
  }
}

function showRestaurants() {
  const interactive = document.getElementById('interactive-section');
  interactive.innerHTML = `
    <div class="column-layout">
      <button class="options-btn" onclick="window.open('http://www.sieteolas.cl/')">Siete Olas</button>
      <button class="options-btn" onclick="window.open('https://www.instagram.com/tiotomate/')">Tío Tomate</button>
      <button class="options-btn" onclick="window.open('https://www.instagram.com/alazancachagua/')">Alazán</button>
      <button class="options-btn" onclick="window.open('https://www.instagram.com/sushiroccarolls/')">Rocca Rolls</button>
    </div>`;
}

function showBreakfasts() {
  const interactive = document.getElementById('interactive-section');
  interactive.innerHTML = `
    <div class="column-layout">
      <button class="options-btn" onclick="window.open('https://www.instagram.com/lemintcafeteria/')">Le Mint</button>
      <button class="options-btn" onclick="window.open('https://www.instagram.com/balicoffeehouse.cl/')">Bali Coffee House</button>
      <button class="options-btn" onclick="window.open('https://www.instagram.com/bakerylynch/')">Bakery Lynch</button>
    </div>`;
}

// 3. Confirmación con Barra
function confirmar(plan) {
  const btn = document.getElementById('main-confirm-btn');
  const bar = document.getElementById('progress-bar');
  const container = document.getElementById('progress-container');
  
  btn.innerText = "RESERVANDO...";
  container.classList.remove('hidden');
  setTimeout(() => bar.style.width = "100%", 50);

  setTimeout(() => {
    alert("❤️ ¡Plan Confirmado! Prepárate para el mejor martes.");
    closeModal();
    btn.innerText = "REPRODUCIR";
    bar.style.width = "0%";
    container.classList.add('hidden');
  }, 2000);
}

function closeModal() { document.getElementById('detail-modal').classList.add('hidden'); }
