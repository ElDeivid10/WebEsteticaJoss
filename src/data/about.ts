/**
 * Información del equipo y dueña.
 */
export interface AboutInfo {
  readonly name: string;
  readonly role: string;
  readonly imageAlt: string;
  readonly badgeYears: string;
  readonly badgeLabelTop: string;
  readonly badgeLabelBottom: string;
  readonly paragraphs: readonly string[];
}

export const about: AboutInfo = {
  name: 'Yosselin Ramírez',
  role: 'Fundadora & Estilista',
  imageAlt: 'Yosselin Ramírez, dueña de Yoss Beauty Salon',
  badgeYears: '8+',
  badgeLabelTop: 'años',
  badgeLabelBottom: 'exp.',
  paragraphs: [
    'Yoss Beauty Salon nació del sueño de Yosselin Ramírez, una apasionada de la belleza que decidió convertir su talento en un espacio donde cada clienta se sienta especial, cuidada y radiante.',
    'Con más de 8 años de experiencia en la industria de la belleza y formación continua en las últimas tendencias, Yoss ha construido un espacio boutique que combina técnica profesional con un trato íntimo y personalizado en el corazón de Uruapan, Michoacán.',
  ],
} as const;
