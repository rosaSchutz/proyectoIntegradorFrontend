import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import Home from './Routes/Home';
import Footer from "./Components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App