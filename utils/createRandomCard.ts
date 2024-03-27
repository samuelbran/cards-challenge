import { faker } from '@faker-js/faker';
import { CCard, CardIssuer, CardStatus } from '@/types/Card';

export function createRandomCard(seed: number): CCard {
  // set the seed so we get consistent data
  faker.seed(seed);

  const issuer: CardIssuer = faker.helpers.arrayElement([
    'visa',
    'mastercard',
    'american_express',
  ]);
  const cardNumber = faker.finance
    .creditCardNumber({ issuer })
    .replace(/-/g, '');
  const status: CardStatus = faker.helpers.arrayElement([
    'active',
    'expired',
    'stolen',
    'locked',
  ]);

  let expiryDate = '';
  if (status === 'expired') {
    expiryDate = faker.date
      .past({ years: 1 })
      .toLocaleString('en-US', { year: '2-digit', month: '2-digit' });
  } else {
    expiryDate = faker.date
      .future({ years: 4 })
      .toLocaleString('en-US', { year: '2-digit', month: '2-digit' });
  }

  return {
    id: seed,
    cardName: 'Lee Sang-hyeok',
    cardNumber,
    cvv: faker.finance.creditCardCVV(),
    expiryDate,
    issuer,
    status,
  };
}
