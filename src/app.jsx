import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Question } from './question/question';
import { Queue } from './queue/queue';


function App() {
  return (
    <BrowserRouter>
        <div className="body">
    <header>
        <h1>THE ULTIMATE HELP QUEUE</h1>
        <nav>
            
            <div className="menu-items">
                <NavLink className='nav-link' to='question'>Ask A Question</NavLink>
                <NavLink className='nav-link' to='queue'>Queue</NavLink>
                <button type="submit" onclick="logout()">Logout</button>
            </div>
        </nav>
    </header>

    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/question' element={<Question />} />
    <Route path='/queue' element={<Queue />} />

    </Routes>

    <footer>
        <div className="name">Charles Oliphant</div>
        <div><a href="https://github.com/chuckth3truck/Startup">GitHub</a></div>
    </footer>
    </div>
    </BrowserRouter>

  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default App;