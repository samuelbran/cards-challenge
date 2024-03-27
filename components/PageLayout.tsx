import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GoBackButton } from '@/components/GoBackButton';

export function PageLayout({
  title,
  children,
  showBackButton = true,
}: Readonly<{
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
}>) {
  return (
    <>
      <Stack alignItems="center" marginBottom={4} spacing={1} direction="row">
        {showBackButton && <GoBackButton />}
        <Typography variant="h5">{title}</Typography>
      </Stack>
      {children}
    </>
  );
}
