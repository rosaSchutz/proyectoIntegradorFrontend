import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import Home from './Routes/Home';
import Login from './Routes/Login';
import Register from './Routes/Register';
import DetailProduct from './Routes/DetailProduct';
import Footer from "./Components/Footer";
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
      </Routes>
      <Footer />
    </>
  )
}

export default App