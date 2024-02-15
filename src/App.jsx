import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import Home from './Routes/Home';
import Footer from "./Components/Footer";
import Login from './Routes/Login';
import Register from './Routes/Register';
import DetailProduct from './Routes/DetailProduct';
import GalleryImages from './Routes/GalleryImages';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/gallery' element={<GalleryImages />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App