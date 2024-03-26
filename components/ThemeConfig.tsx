'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export function ThemeConfig({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTheme = createTheme();

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
