import { SignInForm } from '@/components/SignInForm';
import { render, screen } from '@testing-library/react';

jest.mock('@/actions/signIn', () => ({
  signIn: jest.fn(),
}));

describe('SignInForm', () => {
  it('renders form fields correctly', () => {
    render(<SignInForm />);

    expect(screen.queryByLabelText('Email Address *')).toBeInTheDocument();
    expect(screen.queryByLabelText('Password *')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<SignInForm />);

    expect(screen.queryByText('Sign In')).toBeInTheDocument();
  });

  it('renders a clickable sign in button', () => {
    render(<SignInForm />);

    expect(screen.queryByText('Sign In')).toBeEnabled();
  });
});
