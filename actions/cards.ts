'use server';

import { CardTags } from './tags';

type Props = {
  count?: string;
  Authorization: string;
};

export async function fetchCards({ count = '5', Authorization }: Props) {
  const res = await fetch(
    `http://localhost:3000/dashboard/cards?count=${count}`,
    {
      headers: {
        Authorization,
      },
      next: {
        tags: [CardTags.all],
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
