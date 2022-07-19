import { render, screen } from '@testing-library/react';

import BandComponent from '@/pages/bands/[bandId]';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';

describe('Band', () => {
  it('should render successfully', async () => {
    const { fakeBands } = await readFakeData();
    render(<BandComponent band={fakeBands[0]} error={null} />);
    const headingTitle = fakeBands[0].name;
    const heading = screen.getByRole('heading', { name: headingTitle });
    expect(heading).toBeInTheDocument();

    const image = screen.getByAltText('band photo');
    expect(image).toBeInTheDocument();
  }); 


});

