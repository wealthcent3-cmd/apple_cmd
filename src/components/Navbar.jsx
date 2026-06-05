import React from 'react';
import { navLinks } from "../constants"; // Fixed the space and path

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="logo.svg" alt="apple logo"/>
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="search"/>
                    </button>
                    <img src="cart.svg" alt="apple logo"/>
                    <button>
                        <img src="logo.svg" alt="apple logo"/>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;