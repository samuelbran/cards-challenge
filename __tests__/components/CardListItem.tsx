import { faker } from '@faker-js/faker';
import { CardListItem } from '@/app/dashboard/components/CardListItem';
import { CCard } from '@/types/Card';
import { render, screen } from '@testing-library/react';

faker.seed(123);

const issuer = faker.finance.creditCardIssuer();
let mockCard: CCard = {
  id: faker.string.uuid(),
  cardName: 'Lee Sang-hyeok',
  cardNumber: faker.finance.creditCardNumber({ issuer }).replace(/-/g, ''),
  cvv: faker.finance.creditCardCVV(),
  expiryDate: faker.date
    .future({ years: 4 })
    .toLocaleString('en-US', { year: '2-digit', month: '2-digit' }),
  issuer,
  status: faker.helpers.arrayElement(['active', 'expired', 'stolen', 'locked']),
};

describe('Navigation ListItem', () => {
  it('renders correctly', () => {
    render(<CardListItem card={mockCard} />);
  });

  it('renders name in card', () => {
    render(<CardListItem card={mockCard} />);

    expect(screen.queryByText(mockCard.cardName)).toBeInTheDocument();
  });
});
