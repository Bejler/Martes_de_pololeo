// 1. Manejo de Pantallas y Sonido
setTimeout(() => {
  document.getElementById('loading-screen').classList.add('hidden');
  document.getElementById('profile-screen').classList.remove('hidden');
}, 2500);

function showHome() {
  // Reproducir sonido Tudum
  const sound = document.getElementById('tudum-sound');
  sound.play().catch(() => console.log("Interacción requerida para audio"));

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

// 2. Lógica de los Planes
let planActual = "";

function openPlan(tipo) {
  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('plan-title');
  const desc = document.getElementById('plan-desc');
  const info = document.getElementById('plan-info');
  const interactive = document.getElementById('interactive-section');
  
  modal.classList.remove('hidden');
  interactive.innerHTML = ""; 
  planActual = tipo;

  if(tipo === 'completo') {
    title.innerText = "Cachagua: Día de Película";
    info.innerText = "98% de coincidencia | 2024 | Full Day";
    desc.innerText = "Salida 10:30 AM. Paseo costero en Cachagua y sol en Las Cujas. ¿Cómo prefieres almorzar?";
    interactive.innerHTML = `
      <button class="options-btn" onclick="window.open('http://www.sieteolas.cl/')">🍴 Ver Restaurantes</button>
      <button class="options-btn" onclick="confirmar('Picnic en Las Cujas')">🧺 Picnic en la arena</button>
    `;
  } else if(tipo === 'manana') {
    title.innerText = "Matiné: Desayuno & Brisa";
    info.innerText = "Especial | 4 Horas | Mañana";
    desc.innerText = "Mañana de paseo por Concón. ¿A qué lugar te gustaría que te lleve a desayunar?";
    interactive.innerHTML = `
      <button class="options-btn" onclick="window.open('https://www.instagram.com/lemintcafeteria/')">☕ Ver Cafeterías</button>
      <button class="options-btn" onclick="confirmar('Solo Paseo')">🌊 Solo caminar y conversar</button>
    `;
  } else if(tipo === 'tarde') {
    title.innerText = "Especial: Sunset & Chill";
    info.innerText = "Romance | 6 Horas | Golden Hour";
    desc.innerText = "Piscina, helados y empanaditas para ver el sunset más lindo del mundo.";
    interactive.innerHTML = `<button class="options-btn" onclick="confirmar('Tarde de Sunset')">🌅 Confirmar Plan de Tarde</button>`;
  }
}

function closeModal() { document.getElementById('detail-modal').classList.add('hidden'); }

// 3. Confirmación Pro con Carga y Confetti
function confirmar(detalle = "") {
  const btn = document.getElementById('confirm-btn');
  const planTexto = detalle || planActual;
  
  btn.innerHTML = `<span class="spinner"></span> RESERVANDO...`;
  btn.style.pointerEvents = "none";

  setTimeout(() => {
    // Confeti de Corazones
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60, spread: 55, origin: { x: 0 },
        colors: ['#E50914', '#ffffff'], shapes: ['heart']
      });
      confetti({
        particleCount: 5,
        angle: 120, spread: 55, origin: { x: 1 },
        colors: ['#E50914', '#ffffff'], shapes: ['heart']
      });

      if (Date.now() < end) { requestAnimationFrame(frame); }
    }());

    alert("❤️ ¡CITA CONFIRMADA! ❤️\n\nMagda, tu plan [" + planTexto + "] ha sido reservado.\n¡Prepárate para el mejor martes!");
    
    closeModal();
    btn.innerHTML = "REPRODUCIR (CONFIRMAR CITA)";
    btn.style.pointerEvents = "auto";
  }, 2000);
}
