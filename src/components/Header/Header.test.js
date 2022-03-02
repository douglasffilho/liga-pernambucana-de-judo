import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Header } from './Header';

describe('Header', () => {
  it('should have no accessibility violations', async () => {
    render(
      <Header>
        <p>a11y</p>
      </Header>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(
      <Header>
        <p>first</p>
        <p>second</p>
      </Header>,
    );
    expect(screen.getByText(/first/i)).toBeInTheDocument();
    expect(screen.getByText(/second/i)).toBeInTheDocument();
  });
});
