/**
 * Beneficios mostrados en la sección de descarga de la app.
 */
export type BenefitIconName = 'calendar' | 'bell' | 'star' | 'user';

export interface Benefit {
  readonly title: string;
  readonly description: string;
  readonly icon: BenefitIconName;
}

export const benefits: readonly Benefit[] = [
  {
    icon: 'calendar',
    title: 'Agenda 24/7 sin mensajes',
    description: 'Reserva tu cita a cualquier hora sin necesidad de llamar o escribir.',
  },
  {
    icon: 'bell',
    title: 'Recordatorios automáticos',
    description: 'Nunca olvides tu cita. Recibe notificaciones antes de tu servicio.',
  },
  {
    icon: 'star',
    title: 'Recompensas por lealtad',
    description: 'Acumula puntos con cada visita y canjéalos por descuentos.',
  },
  {
    icon: 'user',
    title: 'Perfil de estilos',
    description: 'Guarda tus servicios favoritos y tu historial de visitas.',
  },
] as const;
