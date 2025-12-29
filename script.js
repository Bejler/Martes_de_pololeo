// Manejo de Pantallas
setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
}, 2500);

function showHome() {
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
        info.innerText = "98% de coincidencia | 2025 | 24h";
        desc.innerText = "Salida 10:30 AM. Paseo costero en Cachagua y sol en Las Cujas. ¿Cómo prefieres almorzar?";
        interactive.innerHTML = `
            <div class="column-layout">
                <button class="options-btn" onclick="showRestaurants()">🍴 Ver Restaurantes en Cachagua</button>
                <button class="options-btn" onclick="confirmar('Picnic en Las Cujas')">🧺 Picnic en la arena</button>
            </div>
        `;
    } 
    else if(tipo === 'manana') {
        title.innerText = "Matiné: Desayuno & Brisa";
        info.innerText = "Familiar | 4 Horas | Mañana de Relax";
        desc.innerText = "Mañana de paseo por Concón. ¿A qué lugar te gustaría que te lleve a desayunar?";
        interactive.innerHTML = `
            <div class="column-layout">
                <button class="options-btn" onclick="showBreakfasts()">☕ Ver opciones de Desayuno</button>
                <button class="options-btn" onclick="confirmar('Solo Paseo')">🌊 Solo caminar y conversar</button>
            </div>
        `;
    } 
    else if(tipo === 'tarde') {
        title.innerText = "Especial: Sunset & Chill";
        info.innerText = "Romance | 6 Horas | Golden Hour";
        desc.innerText = "Piscina, helados y empanaditas para ver el sunset más lindo del mundo en Concón.";
        interactive.innerHTML = `<button class="options-btn" onclick="confirmar('Tarde de Sunset')">🌅 Confirmar Plan de Tarde</button>`;
    }
}

function showRestaurants() {
    const interactive = document.getElementById('interactive-section');
    interactive.innerHTML = `
        <p style='color:#E50914; font-weight:bold; margin:15px 0;'>Opciones en Cachagua:</p>
        <div class="column-layout">
            <button class="options-btn" onclick="window.open('http://www.sieteolas.cl/')">Siete Olas</button>
            <button class="options-btn" onclick="window.open('https://www.instagram.com/tiotomate/')">Tío Tomate</button>
            <button class="options-btn back-btn" onclick="openPlan('completo')">⬅️ Volver</button>
        </div>
    `;
}

function showBreakfasts() {
    const interactive = document.getElementById('interactive-section');
    interactive.innerHTML = `
        <p style='color:#E50914; font-weight:bold; margin:15px 0;'>Lugares en Concón:</p>
        <div class="column-layout">
            <button class="options-btn" onclick="window.open('https://www.instagram.com/lemintcafeteria/')">Le Mint</button>
            <button class="options-btn" onclick="window.open('https://www.instagram.com/balicoffeehouse.cl/')">Bali Coffee House</button>
            <button class="options-btn back-btn" onclick="openPlan('manana')">⬅️ Volver</button>
        </div>
    `;
}

function closeModal() { document.getElementById('detail-modal').classList.add('hidden'); }
function confirmar(plan) { alert("❤️ ¡Plan confirmado! Prepárate para el mejor martes."); closeModal(); }
