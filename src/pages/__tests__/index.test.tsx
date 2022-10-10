import { render, screen } from '@testing-library/react'
import Home from '@pages/index'

import themingWrapper from '@helpers/themingHelper';

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(themingWrapper(<Home />))
    expect(container).toMatchSnapshot();
  })

  it('should renders a heading', () => {
    render(themingWrapper(<Home />));
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument();
  })
});
