import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './products';
import AddProduct from './addProduct';
import AdminProduct from './adminProduct';
import Nav from './navigation';
import Shop from './shop';

function Main() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Shop />} />
                <Route exact path='/products' element={<Product />} />
                <Route exact path='/add-product' element={<AddProduct />} />
                <Route exact path='/admin-products' element={<AdminProduct />} />
            </Routes>
        </div>
    );
};

export default Main;