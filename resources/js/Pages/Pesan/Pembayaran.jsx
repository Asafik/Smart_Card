import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoCard from '../components/assets/img/logo.png';

import FooterComponents from '../components/Partials/FooterComponents';

import Shopeepay from '../components/assets/img/Pembayaran/shopeepay.png';
import Gopay from '../components/assets/img/Pembayaran/gopay.png';
import Dana from '../components/assets/img/Pembayaran/dana.png';
import BankTF from '../components/assets/img/Pembayaran/bf.png';

function App() {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='mb-4'>
      <Container>
          <Link to='/'> {/* Menggunakan Link dari React Router */}
            <img src={logoCard} width='130' alt='logoimage' />
          </Link>
          <div className='number-container'>
            <span className='number'>1</span>{' '}
            {/* Angka 2 pertama */}
          </div>
          <div className='info-text'>Informasi</div>
          <div className='line'></div>

          <div className='icon-container'>
            <span role='img' aria-label='checkmark'>
              &#10003; {/* Ikon centang */}
            </span>
          </div>
          <div className='selesai-text'>Pembayaran</div>
          <div className='line'></div>
          <div className='number-container'>
            <span className='number'>3</span> {/* Angka 3 */}
          </div>
          <div className='selesai-text'>Selesai</div>
        </Container>
      </Navbar>
      <Container>
        <Row className='min-vh-100 d-flex justify-content-between align-items-center'>
          <Col className='text-center'>
            <Link to='/shopeepay'>
              <img src={Shopeepay} alt='ShopeePay' className='shopeepay' />
            </Link>
          </Col>
          <Col className='text-center'>
            <Link to='/gopay'>
              <img src={Gopay} alt='Gopay' className='gopay' />
            </Link>
          </Col>
          <Col className='text-center'>
            <Link to='/dana'>
              <img src={Dana} alt='Dana' className='dana' />
            </Link>
          </Col>
          <Col className='text-center'>
            <Link to='/banktf'>
              <img src={BankTF} alt='Banktf' className='banktf' />
            </Link>
          </Col>
        </Row>
      </Container>
      {/* ... (sisa kode yang ada) */}
      <FooterComponents />
    </div>
  );
}

export default App;
