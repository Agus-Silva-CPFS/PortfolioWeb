import React from 'react';
import '../NavBar/Navbar.css';

const NavBar = () => {
    return (
        <div className='d-flex'>
            <nav className='w-100'>
                <div className='d-flex container-nav justify-content-center '>
                    <ul className='d-flex flex-row  nav-list gap-3 mb-0 p-3 fs-5'>
                        <li className='nav-item'>Inicio</li>
                        <li className='nav-item'>Sobre mi</li>
                        <li className='nav-item'>Habilidades</li>
                        <li className='nav-item'>Proyectos</li>
                        <li className='nav-item'>Contacto</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;