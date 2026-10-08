/**
 * Observador de scroll para el navbar.
 * - Aplica estilos cuando se hace scroll más allá del umbral.
 * - Resalta el link activo según la sección visible.
 * - Respeta prefers-reduced-motion desactivando transiciones.
 */

const NAVBAR_ID = 'site-navbar';
const ACTIVE_THRESHOLD = 60;
const SECTION_OFFSET = 120;

interface NavLinkEl extends HTMLAnchorElement {
  dataset: {
    sectionId?: string;
    active?: string;
  };
}

function setupNavbar(): void {
  const navbar = document.getElementById(NAVBAR_ID) as HTMLElement | null;
  if (!navbar) return;

  const applyScrolled = (scrolled: boolean): void => {
    navbar.dataset.scrolled = String(scrolled);
  };

  const onScroll = (): void => {
    applyScrolled(window.scrollY > ACTIVE_THRESHOLD);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupActiveLink(): void {
  const links = document.querySelectorAll<NavLinkEl>('.nav-link');
  if (links.length === 0) return;

  const sectionIds = Array.from(links)
    .map((link) => link.dataset.sectionId)
    .filter((id): id is string => Boolean(id));

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  const updateActive = (): void => {
    let current = sectionIds[0] ?? '';
    for (const section of sections) {
      if (window.scrollY >= section.offsetTop - SECTION_OFFSET) {
        current = section.id;
      }
    }
    links.forEach((link) => {
      const isActive = link.dataset.sectionId === current;
      link.dataset.active = String(isActive);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

function setupMobileMenu(): void {
  const toggle = document.getElementById('mobile-menu-toggle') as HTMLButtonElement | null;
  const menu = document.getElementById('mobile-menu') as HTMLElement | null;
  if (!toggle || !menu) return;

  const open = (): void => {
    menu.dataset.open = 'true';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = (): void => {
    menu.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.dataset.open === 'true';
    isOpen ? close() : open();
  });

  // Cerrar al hacer click en un link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menu.dataset.open === 'true') {
      close();
      toggle.focus();
    }
  });

  // Cerrar al cambiar a desktop
  const mq = window.matchMedia('(min-width: 768px)');
  mq.addEventListener('change', (e) => {
    if (e.matches) close();
  });
}

function setupFadeIn(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-fade-in]');
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

export function initScrollBehavior(): void {
  setupNavbar();
  setupActiveLink();
  setupMobileMenu();
  setupFadeIn();
}
