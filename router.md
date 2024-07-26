## main.jsx


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import ReactRouter from './projects/reactRouterDom/index.jsx'
import Home from './projects/reactRouterDom/pages/home/Home.jsx'
import About from './projects/reactRouterDom/pages/about/About.jsx'
import Contact from './projects/reactRouterDom/pages/contact/Contact.jsx'
import GitHub from './projects/reactRouterDom/pages/github/GitHub.jsx'
import githubInfoLoader from './projects/reactRouterDom/pages/github/api.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ReactRouter />, // Layout with Header and Footer
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },

//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<ReactRouter />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='github' element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)




## Layout.jsx

import React from 'react'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;