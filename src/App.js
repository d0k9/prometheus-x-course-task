import React from 'react'; 
import './index.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import BookList from './pages/BookList';
// import SignIn from './pages/SignIn';
import Footer from './components/Footer';

   const App = () => {
    return (
      <div>
        <Header />
        <Navbar />  
        {/* <SignIn />  */}
        {/* <BookList /> */}
        <Footer />
      </div>
    );
   }
  
export default App;