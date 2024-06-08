import React from 'react';
import ThemeToggle from './ThemeToggle';

function NavBar() {
    return (
        <nav className='NavBar'>
            <h1>Fountain-Spotter</h1>
            <ul>
                <li><a href="">User</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">My Fountains</a></li>
                <li><a href="">About</a></li>
                <ThemeToggle/>
            </ul>
        </nav>
    )
}

export default NavBar