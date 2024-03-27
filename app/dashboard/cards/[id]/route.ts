import { createRandomCard } from '@/utils/createRandomCard';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const card = createRandomCard(parseInt(params.id));

  return new Response(JSON.stringify(card));
}
