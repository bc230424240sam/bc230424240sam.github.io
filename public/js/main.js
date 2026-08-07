/* ═══════════════════════════════════════
   Shahid Hocien — Portfolio JavaScript
   ═══════════════════════════════════════
   Bootstrap & device detection (runs first).
   Navigation/swipe/keyboard is handled by the
   inline module script in index.html.          */

// ─── Touch device detection ───
const isTouchDevice = 'ontouchstart' in window || (navigator.maxTouchPoints > 0 && !window.matchMedia('(pointer: fine)').matches);

if (isTouchDevice) {
    document.documentElement.classList.add('touch-device');
    const inner = document.querySelector('.cursor-inner');
    const outer = document.querySelector('.cursor-outer');
    if (inner) inner.style.display = 'none';
    if (outer) outer.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// ─── Mobile Hamburger Menu ───
function setupMobileMenu() {
    if (window.__mobileMenuInitialized) return;
    window.__mobileMenuInitialized = true;

    function openMenu() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('mobile-menu');
        if (!hamburger || !menu) return;
        hamburger.classList.add('active');
        menu.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    function closeMenu() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('mobile-menu');
        if (!hamburger || !menu) return;
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    }

    document.addEventListener('click', (e) => {
        const hamburgerBtn = e.target.closest('#hamburger');
        if (hamburgerBtn) {
            e.stopPropagation();
            if (hamburgerBtn.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
            return;
        }

        const navLink = e.target.closest('#mobile-menu .nav-link');
        if (navLink) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        const hamburger = document.getElementById('hamburger');
        if (e.key === 'Escape' && hamburger && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ─── Dynamic Copyright Year & ViewTransitions Init ───
function initMain() {
    const footer = document.querySelector('.footer-credit, .page-footer');
    if (footer && !footer.dataset.yearUpdated) {
        footer.textContent = footer.textContent.replace('©', `© ${new Date().getFullYear()} `);
        footer.dataset.yearUpdated = 'true';
    }
    setupMobileMenu();
    setMobileVH();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
} else {
    initMain();
}
document.addEventListener('astro:page-load', initMain);

// ─── Fix for mobile viewport height (100vh issue) ───
function setMobileVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setMobileVH);
window.addEventListener('orientationchange', () => {
    setTimeout(setMobileVH, 100);
});

// ─── Device Detection for 3D Performance ───
const isLowPowerDevice = (() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    return isMobile || lowCores || lowMemory;
})();

// Expose performance hints for the inline module script
window.__PERF_CONFIG__ = {
    sparkCount: isLowPowerDevice ? 100 : 450,
    pixelRatio: isLowPowerDevice ? 1 : Math.min(window.devicePixelRatio, 2),
    isLowPower: isLowPowerDevice,
};

console.log(`[Perf] Device profile: ${isLowPowerDevice ? 'Low power' : 'Standard'} (sparks: ${window.__PERF_CONFIG__.sparkCount})`);
// --- Global Cursor Animation ---
if (!isTouchDevice) {
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let ox = cx, oy = cy;

    window.addEventListener('mousemove', (e) => {
        cx = e.clientX;
        cy = e.clientY;
    }, { passive: true });

    // Hover effect on interactive elements
    document.addEventListener('mouseover', (e) => {
        const interactive = e.target.closest('a, button, .nav-link, .contact-btn, .story-item, .modal-close, .modal-panel, .blog-card');
        const inner = document.querySelector('.cursor-inner');
        const outer = document.querySelector('.cursor-outer');
        if (interactive) {
            if (inner) inner.classList.add('cursor-hover');
            if (outer) outer.classList.add('cursor-hover');
        } else {
            if (inner) inner.classList.remove('cursor-hover');
            if (outer) outer.classList.remove('cursor-hover');
        }
    }, { passive: true });

    function animateCursor() {
        ox += (cx - ox) * 0.25;
        oy += (cy - oy) * 0.25;

        const inner = document.querySelector('.cursor-inner');
        const outer = document.querySelector('.cursor-outer');
        
        if (inner) {
            inner.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
        }
        if (outer) {
            outer.style.transform = `translate3d(${ox}px, ${oy}px, 0) translate(-50%, -50%)`;
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    // Start cursor animation loop
    requestAnimationFrame(animateCursor);
}
