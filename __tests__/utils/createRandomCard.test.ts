import { CCard } from '@/types/Card';
import { createRandomCard } from '@/utils/createRandomCard';

let seed = 5;

let mockCard: CCard = {
  id: seed,
  cardName: 'Lee Sang-hyeok',
  cardNumber: '4882399406377',
  cvv: '429',
  expiryDate: '09/23',
  issuer: 'visa',
  status: 'expired',
};

describe('createRandomCard util function', () => {
  it('Should generate a valid CCard object', () => {
    const card = createRandomCard(seed);

    expect(card.id).toBe(mockCard.id);
    expect(card.cardName).toBe(mockCard.cardName);
    expect(card.cardNumber).toBe(mockCard.cardNumber);
    expect(card.cvv).toBe(mockCard.cvv);
    expect(card.expiryDate).toBe(mockCard.expiryDate);
    expect(card.issuer).toBe(mockCard.issuer);
    expect(card.status).toBe(mockCard.status);
  });
});
