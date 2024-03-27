'use client';

import { useQuery } from '@tanstack/react-query';
import CardUI from 'react-credit-cards-2';
import { DetailsPageSkeleton } from './skeleton';
import { Alert, Card, CardContent, Grid, Typography } from '@mui/material';
import { CCardDetails } from '@/types/Card';
import { CardStatusView } from '@/app/dashboard/components/CardStatus';
import { CardListItemActions } from '@/app/dashboard/components/CardListItem/actions';

type Props = {
  id: string;
};

export function DetailsPageContent({ id }: Props) {
  const {
    data: card,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['Cards', id],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/dashboard/cards/${id}`
      );
      const resJson: CCardDetails = await response.json();

      return resJson;
    },
    retry: false,
  });

  if (isLoading) return <DetailsPageSkeleton />;
  if (isError) return <Alert severity="error">Something went wrong :(</Alert>;

  return isSuccess ? (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4} xl={3}>
        <CardUI
          issuer={card.issuer}
          number={card.cardNumber}
          expiry={card.expiryDate}
          cvc={card.cvv}
          name={card.cardName}
        />
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <CardStatusView status={card.status} />
            <br />
            <CardListItemActions card={card} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8} xl={9}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="caption">Name on card:</Typography>
                <Typography variant="h5">{card.cardName}</Typography>
              </Grid>
              <Grid item xs={12} md={8} xl={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" color="coral">
                      Outstading Balance:
                    </Typography>
                    <Typography variant="body1">
                      {card.outstanding_balance}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" color="teal">
                      Available Credit:
                    </Typography>
                    <Typography variant="body1">
                      {card.available_credit}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption">Next payment:</Typography>
                    <Typography variant="body1">{card.next_payment}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <div />
  );
}
