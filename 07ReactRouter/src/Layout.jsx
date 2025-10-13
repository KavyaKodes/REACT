import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom' // jaha child route render karna h waha Outlet component use karte h

function Layout(){
return(
    <>
   <Header/>
    <Outlet/> {/* Render the matched child route here .... header same rhega , footer same rhega , beech ka content change hoga */}
   <Footer/>
    </>
)
}

export default Layout