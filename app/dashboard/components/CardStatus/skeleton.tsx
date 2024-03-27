import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function CardStatusViewSkeleton() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Skeleton variant="circular" width={16} height={16} />
      <Skeleton variant="rectangular" width={75} height={24} />
    </Stack>
  );
}
