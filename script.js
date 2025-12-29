// --- CONFIGURACIÓN DE PANTALLAS ---
setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('profile-screen').classList.remove('hidden');
}, 2500);

function showHome() {
  const sound = document.getElementById('tudum-sound');
  sound.play().catch(() => {}); // Fails silently if browser blocks it

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
  }, 4500);
}

// --- LOGICA DE PLANES ---
let planSeleccionado = "";

function openPlan(tipo) {
  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('plan-title');
  const desc = document.getElementById('plan-desc');
  const duration = document.getElementById('plan-duration');
  const interactive = document.getElementById('interactive-section');
  
  modal.classList.remove('hidden');
  interactive.innerHTML = ""; 
  planSeleccionado = tipo;

  if(tipo === 'completo') {
    title.innerText = "Cachagua: Día de Película";
    duration.innerText = "Full Day";
    desc.innerText = "Una jornada completa explorando Las Cujas. Playa, sol y desconexión total. ¿Dónde almorzamos?";
    interactive.innerHTML = `
      <button class="option-pill" onclick="window.open('https://www.instagram.com/tiotomate/')">Tío Tomate Cachagua</button>
      <button class="option-pill" onclick="window.open('https://www.instagram.com/sushiroccarolls/')">Rocca Rolls</button>
      <button class="option-pill" onclick="selectSubPlan('Picnic en la playa')">Picnic Romántico</button>
    `;
  } else if(tipo === 'manana') {
    title.innerText = "Matiné: Desayuno & Paseo";
    duration.innerText = "4h 30m";
    desc.innerText = "Empezamos el martes con la mejor energía en Concón. Escoge tu cafetería favorita:";
    interactive.innerHTML = `
      <button class="option-pill" onclick="window.open('https://www.instagram.com/balicoffeehouse.cl/')">Bali Coffee House</button>
      <button class="option-pill" onclick="window.open('https://www.instagram.com/lemintcafeteria/')">Le Mint</button>
      <button class="option-pill" onclick="selectSubPlan('Solo caminar')">Brisa Marina (Paseo)</button>
    `;
  } else if(tipo === 'tarde') {
    title.innerText = "Especial: Sunset & Chill";
    duration.innerText = "5h 15m";
    desc.innerText = "Atardecer dorado, piscina y snacks. Un plan diseñado para relajar el corazón.";
    interactive.innerHTML = `<button class="option-pill" onclick="selectSubPlan('Tarde de Piscina')">🌅 Confirmar Tarde de Sunset</button>`;
  }
}

function selectSubPlan(nombre) {
  planSeleccionado = nombre;
  confirmar();
}

function closeModal() {
  document.getElementById('detail-modal').classList.add('hidden');
}

// --- CONFIRMACIÓN PRO ---
function confirmar() {
  const btn = document.getElementById('confirm-btn');
  const originalHtml = btn.innerHTML;
  
  // Efecto Loading en botón
  btn.innerHTML = `<span class="spinner"></span> <span>RESERVANDO...</span>`;
  btn.style.pointerEvents = "none";

  setTimeout(() => {
    // 1. Confeti de Corazones
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5, angle: 60, spread: 55, origin: { x: 0 },
        colors: ['#E50914', '#ffffff'], shapes: ['heart']
      });
      confetti({
        particleCount: 5, angle: 120, spread: 55, origin: { x: 1 },
        colors: ['#E50914', '#ffffff'], shapes: ['heart']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());

    // 2. Alerta Personalizada (Simulando Cita Confirmada)
    alert("✨ CITA CONFIRMADA ✨\n\nMagda, tu elección ha sido registrada.\nPrepárate para un Martes de Pololeo inolvidable. ❤️");
    
    closeModal();
    btn.innerHTML = originalHtml;
    btn.style.pointerEvents = "auto";
  }, 2000);
}
