/**
 * Redes sociales del salón.
 * El campo `icon` debe corresponder a un componente en src/icons.
 */
export type SocialIconName = 'instagram' | 'facebook' | 'tiktok' | 'whatsapp';

export interface SocialLink {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon: SocialIconName;
  readonly ariaLabel: string;
}

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    href: '#',
    icon: 'instagram',
    ariaLabel: 'Instagram de Yoss Beauty Salon',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: '#',
    icon: 'facebook',
    ariaLabel: 'Facebook de Yoss Beauty Salon',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    href: '#',
    icon: 'tiktok',
    ariaLabel: 'TikTok de Yoss Beauty Salon',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/524521234567',
    icon: 'whatsapp',
    ariaLabel: 'WhatsApp de Yoss Beauty Salon',
  },
] as const;
