/**
 * Datos de contacto del salón.
 */
export type ContactIconName = 'phone' | 'mail' | 'mapPin' | 'clock';

export interface ContactItem {
  readonly icon: ContactIconName;
  readonly text: string;
  readonly href?: string;
}

export interface ContactInfo {
  readonly phone: string;
  readonly phoneHref: string;
  readonly email: string;
  readonly address: string;
  readonly hours: readonly { label: string; value: string }[];
}

export const contact: ContactInfo = {
  phone: '+52 452 123 4567',
  phoneHref: 'tel:+524521234567',
  email: 'contacto@yossbeauty.com',
  address: 'Uruapan, Michoacán, México',
  hours: [
    { label: 'Lun–Vie', value: '11:00 AM – 2:00 PM · 4:00 PM – 7:00 PM' },
    { label: 'Sábado', value: '11:00 AM – 6:00 PM' },
  ],
} as const;

/**
 * Items de contacto mostrados en la sección About (incluyen href para tel/mailto).
 */
export const aboutContactItems: readonly ContactItem[] = [
  { icon: 'mapPin', text: 'Uruapan, Michoacán, México' },
  { icon: 'phone', text: '+52 452 123 4567', href: contact.phoneHref },
  { icon: 'mail', text: contact.email, href: `mailto:${contact.email}` },
] as const;
