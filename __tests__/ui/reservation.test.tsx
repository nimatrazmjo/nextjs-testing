import { render, screen } from '@testing-library/react';

import { Reservation } from '@/components/reservations/Reservation';

describe('Reservation', () => {
  
  it('Should render the Reservation component', async () => {
    
    render(<Reservation showId={10} submitPurchase={jest.fn()} />)

    const seatCountText = await screen.findByText(/seats left/i);
    expect(seatCountText).toBeInTheDocument()
  });
})