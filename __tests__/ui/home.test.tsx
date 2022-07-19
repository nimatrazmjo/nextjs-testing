import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home', () => {
  it('should render successfully', () => {
    render(<Home />);
    const heading = screen.getByRole( "heading",{ name: /Welcome to /i});
    expect(heading).toBeInTheDocument();
  });
  
  it('Should test if the image is present', () => {
    render(<Home />);
    const image = screen.getByAltText(/concert goer with hands in the shape of a heart/i);
    expect(image).toBeInTheDocument();
  });

});