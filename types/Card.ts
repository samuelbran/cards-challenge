export type CardStatus = 'active' | 'expired' | 'stolen' | 'locked';

export interface CCard {
  id: number;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  issuer: string;
  status: CardStatus;
}

export const CardStatusEnum: Record<CardStatus, string> = {
  active: 'Active',
  locked: 'Locked',
  stolen: 'Stolen',
  expired: 'Expired',
} as const;

export const CardStatusColor: Record<CardStatus, React.CSSProperties['color']> =
  {
    active: '#1FAD8A',
    locked: '#EFBF1F',
    stolen: '#000000',
    expired: '#EB330A',
  } as const;
