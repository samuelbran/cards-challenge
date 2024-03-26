import { DashboardLayout } from '@/components/DashboardLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
