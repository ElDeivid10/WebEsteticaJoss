/**
 * Parallax suave para imágenes de fondo de las secciones Hero y About.
 * Respeta prefers-reduced-motion.
 */

const PARALLAX_BG_ID = 'parallax-bg';
const PARALLAX_ABOUT_ID = 'parallax-about';
const HERO_ID = 'hero';
const ABOUT_ID = 'nosotros';

function isReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initParallax(): void {
  if (isReducedMotion()) return;

  const bg = document.getElementById(PARALLAX_BG_ID);
  const hero = document.getElementById(HERO_ID);
  const aboutBg = document.getElementById(PARALLAX_ABOUT_ID);
  const about = document.getElementById(ABOUT_ID);

  if (!bg || !hero) return;

  let ticking = false;

  const update = (): void => {
    const scrollY = window.scrollY;

    // Hero parallax
    const heroH = hero.offsetHeight;
    if (scrollY <= heroH) {
      const ratio = scrollY / heroH;
      bg.style.transform = `translateY(${ratio * 60}px) scale(1.12)`;
      bg.style.filter = `blur(${ratio * 8}px) brightness(${1 - ratio * 0.3})`;
    }

    // About parallax
    if (aboutBg && about) {
      const rect = about.getBoundingClientRect();
      const offset = -rect.top * 0.25;
      aboutBg.style.transform = `translateY(${offset}px) scale(1.12)`;
    }

    ticking = false;
  };

  const onScroll = (): void => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}
