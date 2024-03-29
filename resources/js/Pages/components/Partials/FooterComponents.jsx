import { Container, Row, Col } from 'react-bootstrap';
import logoCard from '../assets/img/logo.png';
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterComponents = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <img src={logoCard} width='200' alt='logoimage' />
                        <p>
                            JL. Anggrek No 200 RT 15 RW 002 KEL. Cepokomulyo,
                            KEC. Kepanjen, KAB. Malang. Kode Pos 65163
                        </p>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div className='contact-container'>
                            <h3>Kontak Kami</h3>
                            <div className='contact-item'>
                                <FaPhone className='contact-icon' />
                                <p>
                                    <a href='tel:+1234567890'>+123 456 7890</a>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <FaEnvelope className='contact-icon' />
                                <p>
                                    <a href='mailto:info@example.com'>
                                        info@example.com
                                    </a>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <FaMapMarkedAlt className='contact-icon' />
                                <a href='mailto:info@example.com'>
                                    KEC. Kepanjen, KAB. Malang. Kode Pos 65163
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Row>
                        <div className='footer-container'>
                            <hr className='footer-line' />
                            <div className='social-icons'>
                                <a href='#' className='social-icon'>
                                    <FaTwitter />
                                </a>
                                <a href='#' className='social-icon'>
                                    <FaFacebook />
                                </a>
                                <a href='#' className='social-icon'>
                                    <FaInstagram />
                                </a>
                            </div>
                            <p className='footer-text'>
                                &copy; {new Date().getFullYear()} Nama
                                Perusahaan. Hak Cipta Dilindungi.
                            </p>
                        </div>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponents;
