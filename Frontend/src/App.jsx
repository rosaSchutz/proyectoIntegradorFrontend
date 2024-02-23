import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Routes/Home';
import Footer from "./Components/Footer";
import Login from './Routes/Login';
import Register from './Routes/Register';
import DetailProduct from './Routes/DetailProduct';
import GalleryImages from './Routes/GalleryImages';
import Administration from './Routes/Administration';
import AddProduct from './Routes/AddProduct';
import ListProduct from './Routes/ListProduct';
import NotFound from './Routes/NotFound';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/product/:id/gallery' element={<GalleryImages />} />
        <Route path='/administracion' element={<Administration />} />
        <Route path='/administracion/addProduct' element={<AddProduct />} />
        <Route path='/administracion/listProduct' element={<ListProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App