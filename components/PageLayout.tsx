import Typography from '@mui/material/Typography';

export function PageLayout({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <>
      <Typography variant="h4" marginBottom={2}>
        {title}
      </Typography>
      {children}
    </>
  );
}
