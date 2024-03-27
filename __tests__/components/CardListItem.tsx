import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { CardListItem } from '@/app/dashboard/components/CardListItem';
import { CCard } from '@/types/Card';
import { render, screen, waitFor } from '@testing-library/react';

faker.seed(123);

const issuer = faker.finance.creditCardIssuer();
let mockCard: CCard = {
  id: 1,
  cardName: 'Lee Sang-hyeok',
  cardNumber: faker.finance.creditCardNumber({ issuer }).replace(/-/g, ''),
  cvv: faker.finance.creditCardCVV(),
  expiryDate: faker.date
    .future({ years: 4 })
    .toLocaleString('en-US', { year: '2-digit', month: '2-digit' }),
  issuer,
  status: faker.helpers.arrayElement(['active', 'expired', 'stolen', 'locked']),
};

describe('CardListItem', () => {
  afterEach(() => {
    mockCard.status = faker.helpers.arrayElement([
      'active',
      'expired',
      'stolen',
      'locked',
    ]);
  });

  it('renders correctly', () => {
    render(<CardListItem card={mockCard} />);
  });

  it('does not render card details by default', () => {
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText(mockCard.cardName)).toBeNull();
    expect(screen.queryByText(mockCard.cardNumber)).toBeNull();
    expect(screen.queryByText(mockCard.expiryDate)).toBeNull();
  });

  it('render card details upon user interaction', async () => {
    const user = userEvent.setup();
    render(<CardListItem card={mockCard} />);

    await user.click(screen.getByTestId('visibility-toggle'));

    waitFor(() => {
      expect(screen.queryByText(mockCard.cardName)).toBeInTheDocument();
      expect(screen.queryByText(mockCard.cardNumber)).toBeInTheDocument();
      expect(screen.queryByText(mockCard.expiryDate)).toBeInTheDocument();
    });
  });

  it('should render Report stolen button', () => {
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText('Report Stolen')).toBeInTheDocument();
  });

  it('Report stolen button should be disabled if card status is stolen', () => {
    mockCard.status = 'stolen';
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText('Report Stolen')).toBeDisabled();
  });

  it('Report stolen button should be disabled if card status is expired', () => {
    mockCard.status = 'expired';
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText('Report Stolen')).toBeDisabled();
  });

  it('should render Unlock button if card status is locked', () => {
    mockCard.status = 'locked';
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText('Unlock')).toBeInTheDocument();
  });
});
