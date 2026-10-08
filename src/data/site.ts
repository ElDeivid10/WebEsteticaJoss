/**
 * Metadata global del sitio.
 */
export const site = {
  name: 'Yoss Beauty Salon',
  shortName: 'Yoss Beauty',
  tagline: 'Tu mejor versión comienza aquí',
  description:
    'Salón de belleza boutique en Uruapan, Michoacán. Agenda tu cita fácilmente desde nuestra app. Cortes, coloración, depilación, uñas y más.',
  location: 'Uruapan, Michoacán',
  copyright: '© 2026 Yoss Beauty Salon · Todos los derechos reservados.',
  developers: 'David, Arely, Rubén y Moises',
  url: 'https://yossbeauty.com',
  locale: 'es-MX',
} as const;

export type Site = typeof site;
