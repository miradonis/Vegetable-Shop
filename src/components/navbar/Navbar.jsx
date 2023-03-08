import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <section className='navSection'>
            <nav>
                <Link to='vegetable'>Gemüse</Link>
                <Link to='fruits'>Früchte</Link>
                <Link to='specials'>Besonderes</Link>
            </nav>

        </section>
    );
}

export default Navbar;
