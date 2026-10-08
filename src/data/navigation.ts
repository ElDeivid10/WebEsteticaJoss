/**
 * Links de navegación principal.
 * El id debe corresponder al id de la sección destino.
 */
export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly ariaLabel: string;
}

export const navigation: readonly NavLink[] = [
  {
    id: 'hero',
    label: 'Inicio',
    href: '#hero',
    ariaLabel: 'Ir a inicio',
  },
  {
    id: 'servicios',
    label: 'Catálogo',
    href: '#servicios',
    ariaLabel: 'Ver catálogo de servicios',
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    href: '#nosotros',
    ariaLabel: 'Conocer más sobre nosotros',
  },
  {
    id: 'app',
    label: 'App',
    href: '#app',
    ariaLabel: 'Nuestra aplicación',
  },
] as const;
