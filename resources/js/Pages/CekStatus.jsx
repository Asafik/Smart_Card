import { GrCart } from 'react-icons/gr';
import { Container, Row, Col } from 'react-bootstrap';
import box from './components/assets/img/icon/box.png';
import fastdelivery from './components/assets/img/icon/fast-delivery.png';
import arrival from './components/assets/img/icon/arrival.png';
import jajal from './components/assets/img/icon/jajal.png';
import jajalneh from './components/assets/img/icon/jajalneh.png';

import NavbarComponents from './components/Partials/NavbarComponents';
import FooterComponents from './components/Partials/FooterComponents';

const CekStatus = () => {
    return (
        <>
            <NavbarComponents />
            <div className='cekstatus min-vh-100 fw-bold'>
                <Container>
                    <Row>
                        <Col>
                            <div className='text-warning text-center'>
                                <img src={box} width={100} />
                                <p>Dikemas</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-warning text-center'>
                                <img src={fastdelivery} width={100} />
                                <p>Dalam Perjalanan</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-warning text-center'>
                                <img src={arrival} width={100} />
                                <p>Diterima</p>
                            </div>
                        </Col>
                        <Row>
                            <Col>
                                <div className='text-center'>
                                    <img src={jajal} width={900} />
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col>
                            <div className='text-center'>
                                <img src={jajalneh} width={500} />
                            </div>
                        </Col>
                        <Row className='bg-light text-center'>
                            <Col>
                                <p>Penerima </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
            <FooterComponents />
        </>
    );
};

export default CekStatus;
