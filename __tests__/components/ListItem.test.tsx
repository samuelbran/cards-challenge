import { MainListItems, SecondaryListItems } from '@/components/ListItems';
import { render, screen } from '@testing-library/react';

describe('Navigation ListItem', () => {
  it('renders correctly', () => {
    render(<MainListItems />);
  });

  it('renders a link to dashboard screen', () => {
    render(<MainListItems />);

    expect(screen.queryByText('Dashboard')).toBeInTheDocument();
  });

  it('renders a link to about screen', () => {
    render(<MainListItems />);

    expect(screen.queryByText('About')).toBeInTheDocument();
  });

  it('renders a sign out button', () => {
    render(<SecondaryListItems />);

    expect(screen.queryByText('Sign out')).toBeInTheDocument();
  });
});
