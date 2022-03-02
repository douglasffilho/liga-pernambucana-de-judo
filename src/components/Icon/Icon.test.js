import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Icon } from './Icon';

describe('Icon', () => {
  it('should have no accessibility violations', async () => {
    render(
      <Icon>
        <p>a11y</p>
      </Icon>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('should have no accessibility violations when rotated', async () => {
    render(
      <Icon direction="right">
        <p>a11y</p>
      </Icon>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(
      <Icon>
        <p>T</p>
      </Icon>,
    );
    expect(screen.getByText(/T/i)).toBeInTheDocument();
  });

  it('renders without crashing when rotated', () => {
    render(
      <Icon direction="right">
        <p>T</p>
      </Icon>,
    );
    expect(screen.getByText(/T/i)).toBeInTheDocument();
  });
});
