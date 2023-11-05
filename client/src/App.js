import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import Home from './Pages/Home';
// import { ChakraProvider } from '@chakra-ui/react';
import Library from './Pages/library';
import Navbar from './Components/LandingPage/Navbar';
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";
import SigninPage from './Pages/SignIn';
import SignupPage from './Pages/Signup';
import ContactPage from './Pages/contact';
import Scholarlist from './Pages/scholarlist';
function App() {
  return (
    // <ChakraProvider>
      <AppProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/scholarships" element={<Scholarlist />} />
          </Routes>
        </Router>
      </AppProvider>
    //  </ChakraProvider>
  );
}

export default App;
