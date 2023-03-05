import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Avatar from '../images/avatar.png';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const SignIn = () => {
    const [username, setUsername] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = event => {
        setUsername(event.target.value);
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        if (username.length >= 4 && username.length <= 16) {
            localStorage.setItem('username', username)
            setIsValid(true);
            window.location.replace('/booklist')
        }
    }
    
    const checkUsername = () => {
        if (username.length >= 4 && username.length <= 16) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }
    
    return (
        <div>
            <Header />
            <Navbar />  
            <nav>
        <ul>
          <li>
            <Link to="/booklist">BookList</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/specific_book">SpecificBook</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      
            <div className="row mb-3 text-center">
                <div className="col-md-4 themed-grid-col"></div>
                <div className="col-md-4 themed-grid-col">
                    <img className="img mb-4" src={ Avatar } alt="no-foto" />
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <p>Username</p>
                            <label htmlFor="password"></label>
                            <input 
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="type Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                onBlur={checkUsername}
                            />
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-default"
                            disabled={!isValid}
                        >
                            Sign-In
                        </button>
                    </form>
                    {/* "Username" повинно бути збережене в локальний стейт для використання на інших сторінках. */}
                </div>
                <div className="col-md-4 themed-grid-col"></div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn;