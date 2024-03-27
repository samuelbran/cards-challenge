'use client';

import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@mui/icons-material';

export function GoBackButton() {
  const router = useRouter();

  return (
    <IconButton onClick={() => router.back()}>
      <ArrowBack />
    </IconButton>
  );
}
