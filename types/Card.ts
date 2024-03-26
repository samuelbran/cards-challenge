export type CardStatus = 'active' | 'expired' | 'stolen' | 'locked';

export interface Card {
  id: string;
  cardName: string;
  cardNumber: string;
  expiryDate: Date;
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
