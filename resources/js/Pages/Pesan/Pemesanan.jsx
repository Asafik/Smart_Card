import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoCard from '../components/assets/img/logo.png';
import { Link } from 'react-router-dom';
import FooterComponents from '../components/Partials/FooterComponents';

import ShopeePay from '../components/assets/img/Pembayaran/shopeepay.png';
import Gopay from '../components/assets/img/Pembayaran/gopay.png';
import Dana from '../components/assets/img/Pembayaran/dana.png';
import BankTf from '../components/assets/img/Pembayaran/bf.png';

function App() {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='mb-4'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={logoCard} width='130' alt='logoimage' />
          </Navbar.Brand>
          <div className='number-container'>
            <span className='number'>1</span>
            {/* Angka 2 pertama */}
          </div>
          <div className='info-text'>Informasi</div>
          <div className='line'></div>

          <div className='icon-container'>
            <span role='img' aria-label='checkmark'>
              &#10003;
              {/* Ikon centang */}
            </span>
          </div>
          <div className='selesai-text'>Pembayaran</div>
          <div className='line'></div>
          <div className='number-container'>
            <span className='number'>3</span>
            {/* Angka 3 */}
          </div>
          <div className='selesai-text'>Selesai</div>
        </Container>
      </Navbar>
      <div className='min-vh-100 d-flex flex-column align-items-center justify-content-center'>
        <div className='wallet'>
          <Link to='https://shopee.co.id/'>
            <img src={ShopeePay} alt='Image 1' className='ShopeePay' />
          </Link>
          <Link to='https://www.tokopedia.com/'>
            <img src={Gopay} alt='Image 2' className='Gopay' />
          </Link>
          <Link to='https://www.tiktok.com/id-ID/'>
            <img src={Dana} alt='Image 3' className='Dana' />
          </Link>
          <Link to='https://www.tiktok.com/id-ID/'>
            <img src={BankTf} alt='Image 3' className='BankTransfer' />
          </Link>
        </div>
      </div>
      <FooterComponents />
    </div>
  );
}

export default App;
