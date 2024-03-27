import { CardStatus, CardStatusColor, CardStatusEnum } from '@/types/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  status: CardStatus;
};

function Indicator({ status }: Props) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 16,
        height: 16,
        borderRadius: 50,
        background: CardStatusColor[status],
      }}
    />
  );
}

export function CardStatusView({ status }: Props) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Indicator status={status} />
      <Typography>{CardStatusEnum[status]}</Typography>
    </Stack>
  );
}
