import { Container, Row, Col } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { dataSwiper, productTerbaru } from '../components/data/index';
import FooterComponents from '../components/Partials/FooterComponents';
import NavbarComponenets from '../components/Partials/NavbarComponents';

const ProductPage = () => {
    return (
        <>
            <NavbarComponenets />
            <div className='product min-vh-100'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='fw-bold text-center'>
                                Semua Product
                            </h1>
                            <p className='text-center'>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Sequi, eligendi.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Animal Series</h1>
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
                                                alt='unsplash.com'
                                            />
                                            <h1>{data.text}</h1>
                                            <p>{data.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Row>
                    <Row>
                        <h1>Fruit Series</h1>
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
                                                alt='unsplash.com'
                                            />
                                            <h1>{data.text}</h1>
                                            <p>{data.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Row>
                    <Row>
                        <h1>Vegetarian Series</h1>
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
                                                alt='unsplash.com'
                                            />
                                            <h1>{data.text}</h1>
                                            <p>{data.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </div>
            <FooterComponents />
        </>
    );
};

export default ProductPage;
