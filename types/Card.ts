export type CardStatus = 'active' | 'expired' | 'stolen' | 'locked';
export type CardIssuer = 'visa' | 'mastercard' | 'american_express';

export interface CCard {
  id: number;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  issuer: CardIssuer;
  status: CardStatus;
}

export interface CCardDetails extends CCard {
  outstanding_balance: string;
  available_credit: string;
  next_payment: string;
}

export const CardStatusEnum: Record<CardStatus, string> = {
  active: 'Active',
  locked: 'Locked',
  stolen: 'Stolen',
  expired: 'Expired',
} as const;

export const CardIssuerEnum: Record<CardIssuer, string> = {
  visa: 'Visa',
  mastercard: 'MasterCard',
  american_express: 'American Express',
} as const;

export const CardStatusColorEnum: Record<
  CardStatus,
  React.CSSProperties['color']
> = {
  active: '#1FAD8A',
  locked: '#EFBF1F',
  stolen: '#000000',
  expired: '#EB330A',
} as const;
