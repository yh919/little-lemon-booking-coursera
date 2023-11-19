// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onBooking }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    // Validate inputs
    if (!name || !date) {
      alert('Please fill in all fields');
      return;
    }

    // Pass booking data to parent component
    onBooking({ name, date });

    // Clear form inputs
    setName('');
    setDate('');
  };

  return (
    <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2>Book a Table</h2>
      <label style={{ display: 'block', marginBottom: '8px' }}>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
      <label style={{ display: 'block', marginBottom: '8px' }}>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }} />
      <button onClick={handleBooking} style={{ background: '#42a5f5', color: '#ffffff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
    </div>
  );
};

export default BookingForm;
