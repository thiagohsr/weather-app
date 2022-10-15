import { render, screen } from '@testing-library/react'
import Home from '@pages/index'
import { renderWithProviders } from '@helpers/test-store-utils'
import themingWrapper from '@helpers/themingHelper';

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = renderWithProviders(themingWrapper(<Home />));

    expect(container.innerHTML).toMatchSnapshot();
  })

  it('should renders a heading', () => {
    const { container } = renderWithProviders(themingWrapper(<Home />));
    const heading = screen.getByRole('heading', {
      name: /Weather app/i,
    })

    expect(heading).toBeInTheDocument();
  })
});
