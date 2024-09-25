import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './styles.css';

const Navigation = () => {
    const location = useLocation();
    
    const shouldShowNav = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        shouldShowNav && (
            <div className="flex w-full h-full">
                <Link
                    to="/login"
                    className="flex-grow bg-black text-white  text-2xl flex items-center justify-center transition duration-300 hover:bg-gray-800"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="flex-grow bg-white border-l border-gray-200 text-gray-800 text-2xl flex items-center justify-center transition duration-300 hover:bg-gray-100"
                >
                    Register
                </Link>
            </div>
        )
    );
};

const App = () => {
    return (
        <Router>
            <div className="app h-screen w-screen flex flex-col">
                <Navigation />

                <div className="flex-grow flex items-center justify-center">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
