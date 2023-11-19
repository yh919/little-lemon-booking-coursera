// src/components/BookingList.js
import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div>
      <h2>Booking List</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {bookings.map((booking, index) => (
          <li key={index} style={{ background: '#ffffff', padding: '10px', marginBottom: '8px', borderRadius: '4px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
            {`${booking.name} - ${booking.date}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
