// ── GESTION DE LA SIDEBAR ──
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Fermer avec la touche Échap
document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeSidebar(); 
});

// ── GESTION DU CAROUSEL ──
let current = 0;
const slides = document.querySelectorAll('.carousel-slide').length;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.carousel-dot');

function goTo(n) {
    if (!track) return; // Sécurité si pas de carousel sur la page
    current = (n + slides) % slides;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

if (track) {
    document.getElementById('prevBtn').onclick = () => goTo(current - 1);
    document.getElementById('nextBtn').onclick = () => goTo(current + 1);
    dots.forEach(d => d.onclick = () => goTo(+d.dataset.i));

    // Autoplay
    let autoplay = setInterval(() => goTo(current + 1), 4500);
    track.parentElement.onmouseenter = () => clearInterval(autoplay);
    track.parentElement.onmouseleave = () => { autoplay = setInterval(() => goTo(current + 1), 4500); };
}

// ── GESTION DES ACCORDÉONS ──
function toggleAcc(id) {
    const body = document.getElementById(id + '-body');
    const caret = document.getElementById(id + '-caret');
    const header = document.getElementById(id + '-header');
    
    if (!body) return;

    const isOpen = body.classList.contains('open');
    
    // Fermer ou ouvrir
    body.classList.toggle('open', !isOpen);
    if (caret) caret.classList.toggle('open', !isOpen);
    if (header) header.classList.toggle('open', !isOpen);
} 