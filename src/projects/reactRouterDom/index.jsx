import React from 'react'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import User from './pages/user/User'
import GitHub from './pages/github/GitHub'

const ReactRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/user/:userid' element={<User />} />
                <Route path='/github' element={<GitHub />} />
            </Routes>
            <Footer />
        </>
    )
}

export default ReactRouter;