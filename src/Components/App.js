import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from './CreateAccount';
import "./App.css";
import WelcomeCard from './WelcomeCard';
import SignIn from './SignIn';
import ListUsers from './ListUsers';

function App() {
  return (
    <div className='app'>
       <BrowserRouter>
        <Routes>
            {/* <Route path="/test" element={<div><Test /></div>} /> */}
            <Route path="/" element={<div><SignIn /></div>} />
            <Route path="/signup" element={<div><CreateAccount /></div>} />
            <Route path="/listusers" element={<div><ListUsers /></div>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App