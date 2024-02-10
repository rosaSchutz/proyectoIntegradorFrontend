import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './Routes/Home';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App