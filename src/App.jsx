import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav"
import About from "./components/about/About";
import Contacts from './components/contacts/Contacts';
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"

export const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Contacts/>
   <Footer/>   


   </>
  )
}

export default App