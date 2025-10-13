import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider, Route, createBrowserFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

import ReactDOM from 'react-dom/client'



/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "ContactUs",
        element: <ContactUs />
      }
    ]
  }
])*/

 const  router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path= '/' element={<Layout />}>
        <Route path = '' element={<Home />}/>
        <Route path = 'About' element={<About />}/>
        <Route path = 'ContactUs' element={<ContactUs />}/>
        <Route path = 'User/:username' element={<User />}/>
        <Route 
        loader = {githubInfoLoader}
        path = 'GitHub' 
        element={<GitHub />}
        />
      </Route>

    )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
