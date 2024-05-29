
import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {

const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <Title title='What We Offer' subTitle='OUR PROGRAMS'/>
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title title='Campus Photos' subTitle='Gallery'/>
     <Campus/>
     <Title title='What Our Student Says' subTitle='TESTIMONIALS'/>
     <Testimonials/>
     <Title title='Get in Touch' subTitle='CONTACT US'/>
     <Contact/>
     <Footer/>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
