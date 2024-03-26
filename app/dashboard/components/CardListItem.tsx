import { CCard } from '@/types/Card';
import CardUI from 'react-credit-cards-2';

type Props = {
  card: CCard;
};

export function CardListItem({ card }: Props) {
  return (
    <CardUI
      issuer={card.issuer}
      number={card.cardNumber}
      expiry={card.expiryDate}
      cvc={card.cvv}
      name={card.cardName}
    />
  );
}
