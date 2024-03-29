import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import Home from './Pages/Home';
// import { ChakraProvider } from '@chakra-ui/react';
import Library from './Pages/library';
import Navbar from './Components/LandingPage/Navbar';
import BookDetails from "./Components/BookDetails/BookDetails";
import Loading from './Components/Loader/Loader';
import BookList from "./Components/BookList/BookList";
import ContactPage from './Pages/contact';
import Scholarlist from './Pages/scholarlist';
import Profile from './Pages/profile';
import ChatComponent from './Components/TransTalk/forum';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (

      <AppProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/scholarships" element={<Scholarlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forum" element={<ChatComponent />} />
          </Routes>
        </Router>
      </AppProvider>
    
  );
}

export default App;
