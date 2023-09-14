import React from 'react';

//React Router
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//Page
import HomePage from './Pages/HomePage';
import TentangKami from './Pages/TentangKami';
import CekStatus from './Pages/CekStatus';
import { Login, Register } from './Pages';

import { Product } from './Pages';
import { DetailProduct } from './Pages';
import Pembayaran from './Pages/Pesan/Pembayaran'
import Pemesanan from './Pages/Pesan/Pemesanan';
//css
import './css/main.css';

const Example = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={HomePage} />
                    <Route path='/product' Component={Product} />
                    <Route path='/tentangkami' Component={TentangKami} />
                    <Route path='/cekstatus' Component={CekStatus} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/detailproduct' Component={DetailProduct} />
                    <Route path='/pemesanan' Component={Pemesanan} />
                    <Route path='/pembayaran' Component={Pembayaran} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Example;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById('root'));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>,
    );
}
