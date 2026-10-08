/**
 * Catálogo de servicios del salón.
 * Los nombres de `icon` deben corresponder a iconos disponibles en src/icons.
 */
export type ServiceIconName = 'scissors' | 'palette' | 'sparkles' | 'heart';

export interface Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly duration: string;
  readonly icon: ServiceIconName;
  readonly requiresDeposit?: boolean;
  readonly ariaLabel: string;
}

export const services: readonly Service[] = [
  {
    id: 'corte',
    name: 'Corte de Cabello',
    description: 'Cortes clásicos y modernos adaptados a tu estilo y tipo de rostro.',
    duration: '20–30 min',
    icon: 'scissors',
    ariaLabel: 'Corte de cabello',
  },
  {
    id: 'coloracion',
    name: 'Coloración y Tinte',
    description:
      'Desde mechas hasta tintes completos. Tonos personalizados con productos de calidad.',
    duration: '2–8 horas',
    icon: 'palette',
    requiresDeposit: true,
    ariaLabel: 'Coloración y tinte',
  },
  {
    id: 'depilacion',
    name: 'Depilación',
    description: 'Técnicas de depilación suaves y eficaces para una piel perfectamente suave.',
    duration: '30 min',
    icon: 'sparkles',
    ariaLabel: 'Depilación',
  },
  {
    id: 'unas',
    name: 'Uñas y Tratamientos',
    description: 'Manicure, pedicure y tratamientos especializados para manos y pies impecables.',
    duration: 'Variable',
    icon: 'heart',
    ariaLabel: 'Uñas y tratamientos',
  },
] as const;
