import { SignInForm } from '@/components/SignInForm';
import { signIn } from '@/actions/signIn';
import { Container } from '@mui/material';

export default async function Home() {
  return (
    <Container maxWidth="xs">
      <SignInForm />
    </Container>
  );
}
