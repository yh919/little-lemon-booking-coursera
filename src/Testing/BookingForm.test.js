import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const formElement = screen.getByTestId('booking-form');
  expect(formElement).toBeInTheDocument();
});

test('allows user to fill out the form and submit', () => {
  const mockOnBooking = jest.fn();
  render(<BookingForm onBooking={mockOnBooking} />);
  
  // Fill out the form
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-12-01' } });
  
  // Click the submit button
  fireEvent.click(screen.getByText(/book now/i));

  // Check if the onBooking function is called with the correct arguments
  expect(mockOnBooking).toHaveBeenCalledWith({ name: 'John Doe', date: '2023-12-01' });
});
