import { DashboardLayout } from '@/components/DashboardLayout';
import type { Metadata } from 'next';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

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
