import React from 'react';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoCard from '../components/assets/img/logo.png';
import Cat from '../components/assets/img/Card/cat.png';

import FooterComponents from '../components/Partials/FooterComponents';

function App() {
    return (
        <div>
            <Navbar bg='light' expand='lg' className='mb-4'>
                <Container>
                    <Link to='/'>
                        <img src={logoCard} width='130' alt='logoimage' />
                    </Link>

                    <div className='icon-container'>
                        <span role='img' aria-label='checkmark'>
                            &#10003; {/* Ikon centang */}
                        </span>
                    </div>

                    <div className='info-text'>Informasi</div>
                    <div className='line'></div>
                    <div className='number-container'>
                        <span className='number'>2</span>{' '}
                        {/* Angka 2 pertama */}
                    </div>

                    <div className='selesai-text'>Pembayaran</div>
                    <div className='line'></div>
                    <div className='number-container'>
                        <span className='number'>3</span> {/* Angka 3 */}
                    </div>
                    <div className='selesai-text'>Selesai</div>
                </Container>
            </Navbar>

            <div>
                <Container>
                    <Row className='min-vh-100 d-flex justify-content-between align-items-center'>
                        <Col xs={12} md={6}>
                            <Form>
                                <Form.Group controlId='nama'>
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Masukkan nama Anda'
                                        style={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                        }} // Menambahkan garis tebal
                                    />
                                </Form.Group>
                                <Form.Group controlId='alamat'>
                                    <Form.Label>Alamat Pengiriman</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Masukkan alamat pengiriman Anda'
                                        style={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                        }} // Menambahkan garis tebal
                                    />
                                </Form.Group>
                                <Form.Group controlId='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Masukkan email Anda'
                                        style={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                        }} // Menambahkan garis tebal
                                    />
                                </Form.Group>
                                <Form.Group controlId='nomorTelepon'>
                                    <Form.Label>Nomor Telepon</Form.Label>
                                    <Form.Control
                                        type='tel'
                                        placeholder='Masukkan nomor telepon Anda'
                                        style={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                        }} // Menambahkan garis tebal
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={8} md={5}>
                            <div className='card'>
                                <div className='card-content'>
                                    <img src={Cat} alt='Produk' />
                                    <div className='text-right'>
                                        <h3>Animal Smart Card</h3>
                                        <div className='price-container'>
                                            <p>Rp. 30.000</p>
                                            <p className='quantity'>X2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-text'></div>
                                <hr />
                                <div className='total-harga '>
                                    <div className='harga-container'>
                                        <p>Total Harga :</p>
                                        <p className='harga-angka'>
                                            Rp. 60.000
                                        </p>
                                    </div>
                                </div>
                                <div className='button-container'>
                                    <div className='button-kembali'>
                                        <Button>Kembali</Button>
                                    </div>
                                    <div className='button-bayar'>
                                        <Button>Bayar</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterComponents />
        </div>
    );
}

export default App;
