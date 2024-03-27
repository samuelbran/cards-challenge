import { CCard, CardIssuerEnum } from '@/types/Card';
import Stack from '@mui/material/Stack';
import CardUI from 'react-credit-cards-2';
import { CardStatusView } from '../CardStatus';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { CardListItemActions } from './actions';

type Props = {
  card: CCard;
};

export function CardListItem({ card }: Props) {
  const [preview, setPreview] = useState(false);
  const cardNumber = preview
    ? card.cardNumber
    : `**** **** **** ${card.cardNumber.slice(-4)}`;
  const cardExpiry = preview ? card.expiryDate : '00/00';
  const cardName = preview ? card.cardName : 'Card Owner';

  const toggleVisibility = () => setPreview((prev) => !prev);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" justifyContent="center">
        <CardUI
          issuer={card.issuer}
          number={cardNumber}
          expiry={cardExpiry}
          cvc={card.cvv}
          name={cardName}
        />
      </Stack>
      <Card>
        <CardContent>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <div>
              <Typography>{CardIssuerEnum[card.issuer]}</Typography>
              <Typography
                color="text.secondary"
                variant="caption"
                style={{ fontFamily: 'monospace' }}
              >
                {preview
                  ? card.cardNumber.match(/.{1,4}/g)!.join(' ')
                  : cardNumber}
              </Typography>
            </div>
            <div>
              <Tooltip title="Quick view">
                <IconButton
                  onClick={toggleVisibility}
                  data-testid="visibility-toggle"
                >
                  {preview ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Tooltip>
            </div>
          </Stack>
        </CardContent>

        <CardActions>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            style={{ width: '100%' }}
          >
            <CardStatusView status={card.status} />
            <CardListItemActions card={card} />
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
}
