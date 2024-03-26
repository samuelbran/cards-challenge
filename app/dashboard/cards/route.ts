import { faker } from '@faker-js/faker';
import { NextRequest } from 'next/server';
import { Card } from '@/types/Card';

function createRandomCard(): Card {
  const issuer = 'visa';

  return {
    id: faker.string.uuid(),
    cardName: 'Lee Sang-hyeok',
    cardNumber: faker.finance.creditCardNumber({ issuer }),
    cvv: faker.finance.creditCardCVV(),
    expiryDate: faker.date.future({ years: 4 }),
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
  let cards: Card[] = [];

  for (let index = 0; index < count; index++) {
    const card = createRandomCard();
    cards.push(card);
  }

  return new Response(JSON.stringify(cards));
}
