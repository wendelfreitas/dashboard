import React from 'react';
import { screen } from '@testing-library/react';
import App from 'App';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<App/>', () => {
  it('should render heading with theme provider', () => {
    renderWithTheme(<App />);

    expect(
      screen.getByRole('heading', { name: /Get In/i })
    ).toBeInTheDocument();
  });
});
