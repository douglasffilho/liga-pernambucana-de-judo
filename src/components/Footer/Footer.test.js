import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should have no accessibility violations', async () => {
    render(
      <Footer>
        <p>a11y</p>
      </Footer>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(
      <Footer>
        <p>first</p>
        <p>second</p>
      </Footer>,
    );
    expect(screen.getByText(/first/i)).toBeInTheDocument();
    expect(screen.getByText(/second/i)).toBeInTheDocument();
  });
});
