import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [allBookings, setAllBookings] = useState([]);
  const confirmBooking = (booking) => {
    setAllBookings((prev) => [...prev, booking]);
  };

  useEffect(() => {
    console.log("All Bookings Updated:", allBookings);
  }, [allBookings]);

  return (
    <BookingContext.Provider
      value={{
        confirmBooking,
        allBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
