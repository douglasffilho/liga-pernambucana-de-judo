import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { PageTemplate } from './PageTemplate';

describe('PageTemplate', () => {
  it('should have no accessibility violations', async () => {
    render(
      <PageTemplate>
        <p>a11y</p>
      </PageTemplate>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(
      <PageTemplate>
        <p>first</p>
        <p>second</p>
      </PageTemplate>,
    );
    expect(screen.getByText(/first/i)).toBeInTheDocument();
    expect(screen.getByText(/second/i)).toBeInTheDocument();
  });
});
