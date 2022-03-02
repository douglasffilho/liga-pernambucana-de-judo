import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should have no accessibility violations', async () => {
    render(<Logo text="a11y" />);
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(<Logo text="TestText" />);
    expect(screen.getByText(/TestText/i)).toBeInTheDocument();
  });
});
