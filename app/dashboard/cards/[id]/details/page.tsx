import { QueryClientProvider } from '@/providers/QueryClientProvider';
import { DetailsPageContent } from './content';
import { PageLayout } from '@/components/PageLayout';
/**
 * This page uses the classic way to fetch data in React applications, making
 * use of ReactQuery to simplify this process, it also allow us to have clear
 * fetching states.
 */

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Viewing card ${params.id}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <PageLayout title="Card details">
      <QueryClientProvider>
        <DetailsPageContent id={params.id} />
      </QueryClientProvider>
    </PageLayout>
  );
}
