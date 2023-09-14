import { Container, Row, Col } from 'react-bootstrap';
import Boxsanimal from './components/assets/img/gambar.png';

// Import Swiper React components

import { FaChevronRight } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import FooterComponents from './components/Partials/FooterComponents';
import NavbarComponents from './components/Partials/NavbarComponents';

const TentangKami = () => {
    return (
        <>
            <NavbarComponents />
            <div className='tentangkami min-vh-100'>
                <div className='aku '>
                    <Container>
                        <Row className='header-box d-flex align-items-center'>
                            <Col lg='6'>
                                <h1 className='mb-4'>
                                    Animal Smart Card Menggunakan Teknologi
                                    Augmented Reality
                                </h1>
                                <p className='mb-4'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vel dolorum sapiente dicta
                                    tempora, enim explicabo ea et ipsum, optio
                                    quo aperiam nam dolores quos eum earum aut
                                    quisquam officia incidunt.
                                </p>

                                <Row>
                                    <Col>
                                        <button
                                            className='btn btn-dark'
                                            onClick={() =>
                                                navigate('/tentangkami')
                                            }
                                        >
                                            Selengkapya{' '}
                                            <i>
                                                <FaChevronRight />
                                            </i>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg='6 pt-lg-0 pt-5'>
                                <img src={Boxsanimal} alt='animal-img' />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default TentangKami;
