import React from "react";
import { useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext";
const MyBookings = () => {
  const { allBookings } = useContext(BookingContext);
  return (
    <div>
      {allBookings.length > 0 ? (
        allBookings.map((booking, index) => (
          <div key={index}>
            <h2>{booking.turf.name}</h2>
            <p>{booking.date.toDateString()}</p>
            <p>{booking.time}</p>
            <p>{booking.turf.location}</p>
            <p>{booking.slot.time}</p>
          </div>
        ))
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
};

export default MyBookings;
