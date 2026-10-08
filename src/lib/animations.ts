/**
 * Animaciones globales con GSAP + ScrollTrigger.
 *
 * Estrategia "ambos sentidos":
 *  - toggleActions: 'play reverse play reverse' → reproduce al entrar,
 *    revierte al salir, vuelve a reproducir al regresar.
 *  - scrub: true → vincula el progreso al scroll (ya bidireccional).
 *
 * Notas importantes de implementación:
 *  - immediateRender: false evita que el estado "from" se aplique antes
 *    de que el trigger esté listo, previniendo elementos invisibles
 *    permanentes si el scroll nunca alcanza el punto exacto del start.
 *  - El fallback de visibilidad fuerza opacity:1 a los 2.5s como red
 *    de seguridad ante cualquier fallo de ScrollTrigger.
 *  - Respeta prefers-reduced-motion: si está activo, todo se muestra
 *    inmediatamente sin animar.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE_OUT = 'power2.out';
const EASE_IN_OUT = 'power3.inOut';

/** Selector de elementos animables (incluye hijos de grupos stagger). */
const ANIMATABLE_SELECTOR = '[data-animate], [data-animate-stagger] > *';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function showImmediately(): void {
  gsap.set(ANIMATABLE_SELECTOR, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  });
}

/**
 * Red de seguridad: si tras 2.5s algún elemento animable sigue invisible
 * (porque ScrollTrigger no se activó por timing o posición), lo muestra.
 */
function installVisibilityFallback(): void {
  setTimeout(() => {
    document.querySelectorAll<HTMLElement>(ANIMATABLE_SELECTOR).forEach((el) => {
      const opacity = parseFloat(window.getComputedStyle(el).opacity);
      if (opacity < 0.1) {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: EASE_OUT,
        });
      }
    });
  }, 2500);
}

function animateHero(): void {
  const hero = document.querySelector<HTMLElement>('[data-animate="hero"]');
  if (!hero) return;
  const items = Array.from(hero.children) as HTMLElement[];
  if (items.length === 0) return;

  gsap.from(items, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.12,
    ease: EASE_OUT,
    delay: 0.15,
  });
}

function animateFadeUps(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]');
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateFadeIns(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]');
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 0.9,
      ease: EASE_IN_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateScaleIns(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]');
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      scale: 0.92,
      duration: 0.9,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateStaggers(): void {
  const groups = gsap.utils.toArray<HTMLElement>('[data-animate-stagger]');
  groups.forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    if (children.length === 0) return;

    gsap.from(children, {
      opacity: 0,
      y: 45,
      duration: 0.7,
      stagger: 0.1,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: group,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateSlideLefts(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]');
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: -60,
      duration: 0.9,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateSlideRights(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]');
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 60,
      duration: 0.9,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
}

function animateParallax(): void {
  const elements = gsap.utils.toArray<HTMLElement>('[data-parallax]');
  elements.forEach((el) => {
    const speed = parseFloat(el.dataset.parallax ?? '0.25');
    gsap.fromTo(
      el,
      { yPercent: -10 * speed },
      {
        yPercent: 10 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
  });
}

export function initAnimations(): void {
  if (prefersReducedMotion()) {
    showImmediately();
    return;
  }

  // Red de seguridad: si ScrollTrigger no llega a activarse por
  // cualquier motivo, los elementos se vuelven visibles a los 2.5s.
  installVisibilityFallback();

  // Refresca ScrollTrigger tras la carga de fuentes/imágenes
  // para que las posiciones de los triggers sean correctas.
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  animateHero();
  animateFadeUps();
  animateFadeIns();
  animateScaleIns();
  animateSlideLefts();
  animateSlideRights();
  animateStaggers();
  animateParallax();
}
