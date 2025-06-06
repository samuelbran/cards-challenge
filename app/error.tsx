'use client';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
          <ErrorOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {error.message}
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          Error digest: {error.digest}
        </Typography>
        <Button onClick={reset} variant="contained">
          Try again
        </Button>
      </Box>
    </Container>
  );
}
