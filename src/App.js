import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayOut from './component/RootLayOut';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';



const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>

        </Route>
      </Routes>
      <ToastContainer />



    </>
  )
}

export default App
