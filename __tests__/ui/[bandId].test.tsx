import { render, screen } from '@testing-library/react';
import BandDetailsComponent from '@/pages/bands/[bandId]';

describe('Band Details', () => {

  it('Should render the Band details display error', () => {
    const error = 'An error has been occured while fetching the data';
    render(<BandDetailsComponent band={null} error={error} />);
    const heading = screen.getByRole('heading', { name: new RegExp(error) });
    expect(heading).toBeInTheDocument();
  });

  
});