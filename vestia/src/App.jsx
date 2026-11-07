// import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/layouts/navbar/NavBar.jsx"
import Hero from "./components/layouts/hero/Hero.jsx";
import Testimonials from "./components/layouts/testimonials/Testimonials.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Testimonials />
    </>
  )
}

export default App;