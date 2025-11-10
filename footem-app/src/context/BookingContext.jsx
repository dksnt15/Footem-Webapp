import { createContext, useState, useContext, useEffect } from "react";
import { TurfContext } from "./TurfContext";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const { selectedTurf } = useContext(TurfContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    turf: selectedTurf,
    date: new Date(),
    slot: null,
  });

  useEffect(() => {
    setBookingInfo({
      turf: selectedTurf,
      date: selectedDate,
      slot: selectedSlot,
    });
  }, [selectedTurf, selectedDate, selectedSlot]);

  return (
    <BookingContext.Provider
      value={{
        selectedTurf,
        selectedDate,
        setSelectedDate,
        selectedSlot,
        setSelectedSlot,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
