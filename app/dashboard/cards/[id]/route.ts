import { CCardDetails } from '@/types/Card';
import { createRandomCard } from '@/utils/createRandomCard';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  if (isNaN(id))
    return new Response('Bad request', {
      status: 400,
    });

  const card = createRandomCard(id);
  const cardDetails: CCardDetails = {
    ...card,
    outstanding_balance: card.status === 'expired' ? '$0.00' : '$175.80',
    available_credit: card.status === 'expired' ? '$0.00' : '$824.20',
    next_payment: card.status === 'expired' ? '-' : '04/30/2024',
  };

  return new Response(JSON.stringify(cardDetails));
}
