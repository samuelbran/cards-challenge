import { faker } from '@faker-js/faker';
import { NextRequest } from 'next/server';
import { CCard } from '@/types/Card';

function createRandomCard(): CCard {
  const issuer = faker.finance.creditCardIssuer();
  const cardNumber = faker.finance
    .creditCardNumber({ issuer })
    .replace(/-/g, '');

  return {
    id: faker.string.uuid(),
    cardName: 'Lee Sang-hyeok',
    cardNumber,
    cvv: faker.finance.creditCardCVV(),
    expiryDate: faker.date
      .future({ years: 4 })
      .toLocaleString('en-US', { year: '2-digit', month: '2-digit' }),
    issuer,
    status: faker.helpers.arrayElement([
      'active',
      'expired',
      'stolen',
      'locked',
    ]),
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const countParam = searchParams.get('count');
  const count = countParam ? parseInt(countParam) : 1;
  let cards: CCard[] = [];

  for (let index = 0; index < count; index++) {
    const card = createRandomCard();
    cards.push(card);
  }

  return new Response(JSON.stringify(cards));
}
