import { NextRequest } from 'next/server';
import { CCard } from '@/types/Card';
import { createRandomCard } from '@/utils/createRandomCard';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const countParam = searchParams.get('count');
  const count = countParam ? parseInt(countParam) : 1;
  let cards: CCard[] = [];

  for (let index = 0; index < count; index++) {
    const card = createRandomCard(index + 1);
    cards.push(card);
  }

  return new Response(JSON.stringify(cards));
}
