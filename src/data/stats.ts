export interface Stat {
  readonly value: string;
  readonly label: string;
}

export const stats: readonly Stat[] = [
  { value: '8+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientas satisfechas' },
  { value: '4', label: 'Servicios especializados' },
  { value: '100%', label: 'Productos de calidad' },
] as const;
