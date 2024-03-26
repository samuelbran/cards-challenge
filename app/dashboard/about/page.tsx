import { PageLayout } from '@/components/PageLayout';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'About Cards Challenge',
};

export default async function Page() {
  return (
    <PageLayout title="About">
      <Card>
        <CardContent>
          <Typography variant="subtitle2" style={{ marginBottom: 20 }}>
            Cards Challenge
          </Typography>
          <Divider />
          <br />
          <Typography>Framework: Next.js 14</Typography>
          <Typography>UI Library: Material UI 5</Typography>
          <Typography>Data generation: Faker.js</Typography>
          <Typography>
            Author: Samuel Bran &lt;hello@samuelbran.com&gt;
          </Typography>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
