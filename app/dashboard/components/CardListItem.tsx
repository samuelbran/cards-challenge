import { CCard } from '@/types/Card';
import Stack from '@mui/material/Stack';
import CardUI from 'react-credit-cards-2';
import { CardStatusView } from './CardStatus';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

type Props = {
  card: CCard;
};

export function CardListItem({ card }: Props) {
  const [preview, setPreview] = useState(false);
  const cardNumber = preview ? card.cardNumber : '**** **** **** ****';
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
        <CardActions>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            style={{ width: '100%' }}
          >
            <CardStatusView status={card.status} />
            <Stack direction="row" spacing={2}>
              <Tooltip title={preview ? 'Hide details' : 'View details'}>
                <IconButton
                  onClick={toggleVisibility}
                  data-testid="visibility-toggle"
                >
                  {preview ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Tooltip>
              <Button variant="contained" size="small">
                Manage
              </Button>
            </Stack>
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
}
