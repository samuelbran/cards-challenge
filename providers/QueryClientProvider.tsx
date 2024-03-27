'use client';

import {
  QueryClient,
  QueryClientProvider as QCProvider,
} from '@tanstack/react-query';

export function QueryClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return <QCProvider client={queryClient}>{children}</QCProvider>;
}
