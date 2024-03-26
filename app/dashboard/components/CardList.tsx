'use client';

import Grid from '@mui/material/Grid';

import { CCard } from '@/types/Card';
import { CardListItem } from './CardListItem';

type Props = {
  cards: CCard[];
};

export function CardList({ cards }: Props) {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={card.id}>
          <CardListItem card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
