/**
 * This page uses NextJS way of fetching data, since this component is running
 * in the server we don't have to make use of useEffect.
 *
 * Everytime the searchParams change this page refreshes so we have to revalidate
 * the data (clear cache) we have fetched to get fresh new data based on the count
 * param.
 *
 * When the user gets to view the page the data has been fetched and ready to
 * display.
 */

import { fetchCards } from '@/actions/cards';
import { CardTags } from '@/actions/tags';
import { PageLayout } from '@/components/PageLayout';
import { CCard } from '@/types/Card';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { Metadata } from 'next/types';
import { CardList } from './components/CardList';
import { CountSelector } from './components/CountSelector';
import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: 'Your cards',
};

type Props = {
  searchParams: { count: string };
};

export default async function Page({ searchParams }: Props) {
  const Authorization = cookies().get('Authorization')?.value as string;
  revalidateTag(CardTags.all);
  const { count } = searchParams;

  const cards: CCard[] = await fetchCards({ count, Authorization });

  return (
    <PageLayout title="Your cards">
      <Stack direction="column" marginBottom={4}>
        <CountSelector />
      </Stack>

      <CardList cards={cards} />
    </PageLayout>
  );
}
