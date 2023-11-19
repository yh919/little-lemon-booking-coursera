// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

const App = () => {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (booking) => {
    // Update state with new booking
    setBookings([...bookings, booking]);
  };

  return (
    <div style={{"textAlign" : "center"}}>
      <Header />
      <BookingForm onBooking={handleBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
};

export default App;
