import { render, screen } from '@testing-library/react';

import Page from '../../app/page';

describe('Page', () => {
  it('renders a path to file', () => {
    render(<Page />);

    const heading = screen.getByText('Welcome');

    expect(heading).toBeInTheDocument();
  });
});
