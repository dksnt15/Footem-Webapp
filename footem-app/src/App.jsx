import { useState } from 'react'
 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import Home from './Pages/Home';
 import Navbar from './Components/Navbar';
 import Signup from './Pages/SignUp';
 import TurfDetails from './Pages/TurfDetails';
  import BookingForm from './Pages/BookingForm';
  import MyBookings from './Pages/MyBookings';
  import Dashboard from './Pages/Dashboard';
  import Turf from './Pages/Turfs';

 
function App() {
   

  return (
    <>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/turf/:id" element={<TurfDetails/>}/>
            <Route path="/bookingform" element={<BookingForm/>}/>
            <Route path="/mybookings" element={<MyBookings/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/turfs" element={<Turf/>}/>
    
          </Routes> 
        </Router>
        </div>
    </>
  )
}

export default App
