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
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`We couldn't retrieve your cards information`);
  }

  return res.json();
}
