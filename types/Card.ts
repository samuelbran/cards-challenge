export type CardStatus = 'active' | 'expired' | 'stolen' | 'locked';

export interface CCard {
  id: string;
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
