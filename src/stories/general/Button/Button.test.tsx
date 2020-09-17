import React from 'react';
import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { renderWithTheme } from 'utils/tests/helpers';
import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Get In</Button>);
    expect(screen.getByRole('button', { name: /Get In/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Get In</Button>);
    expect(screen.getByRole('button', { name: /Get In/i })).not.toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Get In</Button>);
    expect(screen.getByRole('button', { name: /Get In/i })).not.toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Get In</Button>);
    expect(screen.getByRole('button', { name: /Get In/i })).not.toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Get In</Button>
    );

    expect(screen.getByText(/Get In/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Get In
      </Button>
    );

    expect(screen.getByRole('link', { name: /Get In/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
