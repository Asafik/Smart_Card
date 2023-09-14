import { Container, Row, Col } from 'react-bootstrap';
import AnimalImage from './components/assets/img/Card/card.png';
import Boxsanimal from './components/assets/img/gambar.png';
import Shopee from './components/assets/img/icon/shopee.png';
import Tokped from './components/assets/img/icon/tokped.png';
import Tiktok from './components/assets/img/icon/tiktok.png';

import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaChevronRight } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FaShoppingCart } from 'react-icons/fa';

// import required modules
import { Pagination } from 'swiper/modules';

import { dataSwiper, productTerbaru } from './components/data/index';

import { useNavigate } from 'react-router-dom';

import FooterComponents from './components/Partials/FooterComponents';
import NavbarComponents from './components/Partials/NavbarComponents';

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <>
            <NavbarComponents />
            <div className='homepage'>
                <header className='w-100 min-vh-100 d-flex align-items-center'>
                    <Container>
                        <Row className='header-box d-flex align-items-center'>
                            <Col lg='6'>
                                <h1 className='mb-4'>Animal Smart Card</h1>
                                <p className='mb-4'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vel dolorum sapiente dicta
                                    tempora, enim explicabo ea et ipsum, optio
                                    quo aperiam nam dolores quos eum earum aut
                                    quisquam officia incidunt.
                                </p>

                                <button className='btn btn-dark btn-lg rounded-1 me-2 mb-xs mb-2'>
                                    Beli Sekarang{' '}
                                    <i className='btn btn-light'>
                                        <GrCart />
                                    </i>
                                </button>
                            </Col>
                            <Col lg='6 pt-lg-0 pt-5'>
                                <img src={AnimalImage} alt='animal-img' />
                            </Col>
                        </Row>
                    </Container>
                </header>
                <div className='product w-100 min-vh-100'>
                    <Container>
                        <Row>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    993: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination]}
                                className='mySwiper'
                            >
                                {productTerbaru.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <div className='animal'>
                                                <img
                                                    src={data.image}
                                                    alt='Produk'
                                                />
                                                <h1>
                                                    {data.text}{' '}
                                                    <FaShoppingCart className='text-white bg-warning' />
                                                </h1>
                                                <p>{data.desc}</p>
                                                <a
                                                    href={data.purchaseLink}
                                                    className='purchase-link'
                                                ></a>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </Row>
                    </Container>
                    <div className='tentangkami '>
                        <Container>
                            <Row className='header-box d-flex align-items-center'>
                                <Col lg='6'>
                                    <h1 className='mb-4'>
                                        Animal Smart Card Menggunakan Teknologi
                                        Augmented Reality
                                    </h1>
                                    <p className='mb-4'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Vel dolorum sapiente
                                        dicta tempora, enim explicabo ea et
                                        ipsum, optio quo aperiam nam dolores
                                        quos eum earum aut quisquam officia
                                        incidunt.
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

                    <div className=' text-center py-5'>
                        <h1>Tersedia juga di Marketplace</h1>
                    </div>
                    <div className='image-container'>
                        <Link to='https://shopee.co.id/'>
                            <img src={Shopee} alt='Image 1' className='image' />
                        </Link>
                        <Link to='https://www.tokopedia.com/'>
                            <img src={Tokped} alt='Image 2' className='image' />
                        </Link>
                        <Link to='https://www.tiktok.com/id-ID/'>
                            <img
                                src={Tiktok}
                                alt='Image 3'
                                className='tiktok'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </>
    );
};

export default HomePage;
