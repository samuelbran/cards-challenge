import { CCard } from '@/types/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {
  card: CCard;
};

export function CardListItemActions({ card }: Props) {
  const isExpiredOrStolen =
    card.status === 'expired' || card.status === 'stolen';

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        size="small"
        color="error"
        disabled={isExpiredOrStolen}
      >
        Report Stolen
      </Button>
      {card.status === 'locked' && (
        <Button
          variant="outlined"
          size="small"
          color="warning"
          disabled={isExpiredOrStolen}
        >
          Unlock
        </Button>
      )}
    </Stack>
  );
}
