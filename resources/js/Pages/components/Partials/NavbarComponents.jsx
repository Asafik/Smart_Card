import { useState, useEffect } from 'react';
//Bosstrat
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Impor Link dari React Router

import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import ikon avatar dan keranjang

import logoCard from '../assets/img/logo.png';

const NavbarComponents = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();
        window.addEventListener('scroll', changeBackgroundColor);
    });
    return (
        <div>
            <Navbar expand='lg' className={changeColor ? 'color-active' : ''}>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logoCard} width='130' alt='logoimage' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mx-auto text-center'>
                            <Nav.Link href='/'>Beranda</Nav.Link>
                            <Nav.Link href='/product'>Produk</Nav.Link>
                            <Nav.Link href='/tentangkami'>
                                Tentang Kami
                            </Nav.Link>
                            <Nav.Link href='/cekstatus'>
                                Cek Status Pesanan
                            </Nav.Link>
                        </Nav>
                        <div className='text-center'>
                            {/* Tautan ke halaman keranjang */}
                            <Link to='/cart' className='nav-icon'>
                                <button className='btn btn-outline-dark rounded-1'>
                                    <FaShoppingCart />
                                </button>
                            </Link>

                            {/* Tautan ke halaman login */}
                            <Link to='/login' className='nav-icon'>
                                <button className='btn btn-outline-dark rounded-1'>
                                    <FaUser />
                                </button>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponents;
