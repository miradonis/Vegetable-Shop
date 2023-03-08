import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';;


function Navbar() {
    return (
        <section className='navWrapper'>
            <nav>
                <Link to='vegetable'>Gemüse</Link>
                <Link to='fruits'>Früchte</Link>
                <Link to='specials'>Besonderes</Link>
            </nav>

        </section>
    );
}

export default Navbar;
