/**
 * Catálogo de servicios del salón.
 * Los nombres de `icon` deben corresponder a iconos disponibles en src/icons.
 */
export type ServiceIconName = 'scissors' | 'palette' | 'sparkles' | 'heart' | 'user' | 'star';

export interface SubService {
  readonly name: string;
}

export interface Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly duration: string;
  readonly icon: ServiceIconName;
  readonly requiresDeposit?: boolean;
  readonly ariaLabel: string;
  readonly subServices?: readonly SubService[];
}

export const services: readonly Service[] = [
  {
    id: 'cortes',
    name: 'Cortes de Cabello',
    description: 'Cortes modernos y clásicos adaptados a cada persona, realizados con técnica profesional.',
    duration: '20–45 min',
    icon: 'scissors',
    ariaLabel: 'Cortes de cabello',
    subServices: [
      { name: 'Dama' },
      { name: 'Caballero' },
      { name: 'Niños' },
      { name: 'Niñas' },
    ],
  },
  {
    id: 'barba',
    name: 'Perfilado de Barba',
    description: 'Definición y perfilado de barba para un acabado limpio y estilizado.',
    duration: '15–20 min',
    icon: 'user',
    ariaLabel: 'Perfilado de barba',
  },
  {
    id: 'colorimetria',
    name: 'Colorimetría',
    description: 'Transforma tu cabello con colores personalizados y técnicas de última generación.',
    duration: '2–8 horas',
    icon: 'palette',
    requiresDeposit: true,
    ariaLabel: 'Colorimetría y coloración',
    subServices: [
      { name: 'Mechas' },
      { name: 'Tintes' },
      { name: 'Balayage' },
      { name: 'Baby Lights' },
      { name: 'Rayos' },
    ],
  },
  {
    id: 'maquillaje',
    name: 'Maquillaje y Peinado',
    description: 'Realza tu belleza natural con maquillaje profesional y peinados para cualquier ocasión.',
    duration: '45–90 min',
    icon: 'star',
    ariaLabel: 'Maquillaje y peinado',
  },
  {
    id: 'depilacion',
    name: 'Depilaciones',
    description: 'Técnicas de depilación suaves y eficaces para una piel perfectamente suave.',
    duration: '15–45 min',
    icon: 'sparkles',
    ariaLabel: 'Depilaciones',
    subServices: [
      { name: 'Rostro completo' },
      { name: 'Cejas' },
      { name: 'Bigote' },
      { name: 'Patillas' },
      { name: 'Mejillas' },
      { name: 'Frente' },
      { name: 'Barbilla' },
      { name: 'Axilas' },
    ],
  },
  {
    id: 'alaciado',
    name: 'Alaciados Progresivos',
    description: 'Tratamiento para alisar y suavizar el cabello de forma duradera con productos de calidad.',
    duration: '3–5 horas',
    icon: 'heart',
    requiresDeposit: true,
    ariaLabel: 'Alaciados progresivos',
  },
] as const;
